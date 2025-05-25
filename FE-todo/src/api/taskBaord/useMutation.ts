import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { createApi } from "../axios";
import { AxiosError, AxiosResponse } from "axios";
import { IError } from "@/src/shared/type/api/IError";
import { ICreateTaskBoard } from "@/src/shared/type/taskBorad/ICreateTaskBoard";

export const useCreateTaskBoardhMutation = (): UseMutationResult<AxiosResponse<boolean>, AxiosError<IError>, ICreateTaskBoard> => {
  const axios = createApi()
  return useMutation<AxiosResponse<boolean>, AxiosError<IError>, ICreateTaskBoard>({
    mutationFn: async ({ title, description }: ICreateTaskBoard) => {
      return await axios.post("task-borad", { title, description });
    },
  });
};

