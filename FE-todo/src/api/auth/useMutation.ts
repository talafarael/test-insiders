import { IError } from "@/src/shared/type/api/IError";
import { IAuthResponse } from "@/src/shared/type/auth/IAuthResponse";
import { IAuthVariables } from "@/src/shared/type/auth/IAuthVariables";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios, { AxiosError, AxiosResponse } from "axios";
import { createApi } from "../axios";

export const useAuthMutation = (): UseMutationResult<AxiosResponse<IAuthResponse>, AxiosError<IError>, IAuthVariables> => {
  const axios = createApi()
  return useMutation<AxiosResponse<IAuthResponse>, AxiosError<IError>, IAuthVariables>({
    mutationFn: async ({ body, typePage }: IAuthVariables) => {
      if (typePage == "login") {
        return await axios.post("auth/login", body)
      } else {
        return await axios.post("auth/registration", body)
      }
    },
  });
};
