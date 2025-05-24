import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { ITaskBoard } from "../shared/type/taskBorad/ITaskBoard";

export interface ITaskBoardStore {
  taskBoard: ITaskBoard | undefined
  addTaskBoard: (user: ITaskBoard) => void
}

const localMiddlewares = (f: StateCreator<ITaskBoardStore>) =>
  devtools(
    persist(f, {
      name: "tokenStorage",
      storage: createJSONStorage(() => localStorage),
    })
  );

export const useTaskBoardStore = create<ITaskBoardStore>()(
  localMiddlewares((set) => ({
    taskBoard: undefined,
    addTaskBoard: (taskBoard: ITaskBoard) => {
      set(() => ({
        taskBoard: taskBoard
      }));
    }
  }))
)


