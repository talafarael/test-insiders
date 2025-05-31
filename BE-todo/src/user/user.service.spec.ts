import { PrismaService } from "../prisma/prisma.service";
import { UserService } from "./user.service";
import { Test, TestingModule } from "@nestjs/testing";

const mockUser = {
  id: 1,
  email: 'test@example.com',
  taskBoard: { id: 123, name: 'Test Board' },
  contributions: [
    {
      id: 10,
      taskBoard: { id: 124, name: 'Contrib Board' }
    }
  ]
};
describe('UserService', () => {
  let service: UserService
  let db: PrismaService
  beforeEach(async () => {
    jest.spyOn(console, 'error').mockImplementation(() => { });

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: PrismaService,
          useValue: {
            user: {
              findFirst: jest.fn(),
            },
          },
        },
      ]
    }).compile();
    service = module.get<UserService>(UserService)
    db = module.get<PrismaService>(PrismaService)
  })

  afterAll(() => {
    (console.error as jest.Mock).mockRestore();
  });
  it('should return a user with related data when found', async () => {
    (db.user.findFirst as jest.Mock).mockResolvedValue(mockUser);

    const result = await service.findOneByEmail('test@example.com');

    expect(db.user.findFirst).toHaveBeenCalledWith({
      where: { email: 'test@example.com' },
      include: {
        taskBoard: true,
        contributions: {
          include: {
            taskBoard: true,
          },
        },
      },
    });
    expect(result).toEqual(mockUser);
  });

  it('should return undefined when user not found', async () => {
    (db.user.findFirst as jest.Mock).mockResolvedValue(undefined);

    const result = await service.findOneByEmail('notfound@example.com');

    expect(result).toBeUndefined();
  });

  it('should throw error when prisma throws', async () => {
    (db.user.findFirst as jest.Mock).mockRejectedValue(new Error('DB error'));

    await expect(service.findOneByEmail('error@example.com')).rejects.toThrow('Failed to fetch user by name');
  });

})
