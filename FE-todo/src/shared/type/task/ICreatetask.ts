import { ICreateTaskForm } from "./ICreateTaskForm";

export interface ICreateTask extends ICreateTaskForm {
  taskBoardId: string
}
