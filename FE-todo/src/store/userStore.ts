import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import { IUser } from "../shared/type/user/IUser";

export interface IUserStore {
  user: IUser | undefined
  addUser: (user: IUser) => void
}

const localMiddlewares = (f: StateCreator<IUserStore>) =>
  devtools(
    persist(f, {
      name: "tokenStorage",
      storage: createJSONStorage(() => localStorage),
    })
  );

export const useUserStore = create<IUserStore>()(
  localMiddlewares((set) => ({
    user: undefined,
    addUser: (user: IUser) => {
      set(() => ({
        user: user
      }));
    }
  }))
)

