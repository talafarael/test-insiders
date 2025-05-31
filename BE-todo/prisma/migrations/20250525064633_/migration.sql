-- CreateEnum
CREATE TYPE "RoleInDesk" AS ENUM ('READER', 'WRITER');

-- CreateTable
CREATE TABLE "Contributer" (
    "id" TEXT NOT NULL,
    "role" "RoleInDesk" NOT NULL,
    "userId" INTEGER NOT NULL,
    "taskBoardId" TEXT NOT NULL,

    CONSTRAINT "Contributer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Contributer" ADD CONSTRAINT "Contributer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contributer" ADD CONSTRAINT "Contributer_taskBoardId_fkey" FOREIGN KEY ("taskBoardId") REFERENCES "TaskBoard"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
