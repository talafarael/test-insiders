import { ITaskBoard } from "../taskBorad/ITaskBoard";

export interface IUser {
  id: number;
  email: string;
  password: string;
  name: string;
  role: 'USER' | 'ADMIN'
  taskBoard: ITaskBoard[];
  contributions: {
    taskBoard: ITaskBoard
  }[]
}
