import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { createApi } from "../axios";
import { AxiosError, AxiosResponse } from "axios";
import { IError } from "@/src/shared/type/api/IError";
import { ICreateTask } from "@/src/shared/type/task/ICreatetask";
import { IChangeStateTask } from "@/src/shared/type/task/IChangeStateTask";
import { IChangeTask } from "@/src/shared/type/task/IChangeTask";

export const useCreateTaskMutation = (): UseMutationResult<AxiosResponse<boolean>, AxiosError<IError>, ICreateTask> => {
  const axios = createApi()
  return useMutation<AxiosResponse<boolean>, AxiosError<IError>, ICreateTask>({
    mutationFn: async ({ title, description, taskBoardId }: ICreateTask) => {
      return await axios.post("task", { title, description, taskBoardId });
    },
  });
};
export const useChnageStateTaskMutation = (): UseMutationResult<AxiosResponse<boolean>, AxiosError<IError>, IChangeStateTask> => {
  const axios = createApi()
  return useMutation<AxiosResponse<boolean>, AxiosError<IError>, IChangeStateTask>({
    mutationFn: async ({ id, state }: IChangeStateTask) => {
      return await axios.post("task/change-state-task", { id, state });
    },
  });
};
export const useChangeTaskMutation = (): UseMutationResult<AxiosResponse<boolean>, AxiosError<IError>, IChangeTask> => {
  const axios = createApi()
  return useMutation<AxiosResponse<boolean>, AxiosError<IError>, IChangeTask>({
    mutationFn: async ({ title, description, id }: IChangeTask) => {
      return await axios.post("task/change-task", { title, description, id });
    },
  });
};
export const useDeleteTaskMutation = (): UseMutationResult<AxiosResponse<boolean>, AxiosError<IError>, string> => {
  const axios = createApi()
  return useMutation<AxiosResponse<boolean>, AxiosError<IError>, string>({
    mutationFn: async (id: string) => {
      return await axios.delete(`task/${id}`);
    },
  });
};
