import { create, StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

export interface ITokenStore {
  token: string | undefined
  createToken: (token: string) => void

}

const localMiddlewares = (f: StateCreator<ITokenStore>) =>
  devtools(
    persist(f, {
      name: "tokenStorage",
      storage: createJSONStorage(() => localStorage),
    })
  );

export const useTokenStore = create<ITokenStore>()(
  localMiddlewares((set) => ({
    token: undefined,
    createToken: (token: string) => {
      set(() => ({
        token: token
      }));
    }

  }))
)
