import { IError } from "@/src/shared/type/api/IError";
import { IUser } from "@/src/shared/type/user/IUser";
import { AxiosError, AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { createApi } from "../axios";
import { ITaskBoard } from "@/src/shared/type/taskBorad/ITaskBoard";
export const useGetTaskBoardQuery = (id?: string): UseQueryResult<AxiosResponse<ITaskBoard>, AxiosError<IError>> => {

  const axios = createApi();
  return useQuery({
    queryKey: ["get-task-board", id],
    queryFn: async (): Promise<AxiosResponse<ITaskBoard>> => {
      const res = await axios.get(`task-borad/${id}`);
      return res;
    },
    enabled: !!id,
  });
};
