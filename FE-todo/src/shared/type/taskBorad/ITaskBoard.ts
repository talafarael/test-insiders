import { ITask } from "../task/ITask";

export interface ITaskBoard {
  id: string;
  title: string;
  description: string;
  ownerId: number;
  tasks: ITask[]
};
