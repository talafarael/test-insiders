import { IUser } from "@/src/shared/type/user/IUser";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { createApi } from "../axios";
import { AxiosError, AxiosResponse } from "axios";
import { IError } from "@/src/shared/type/api/IError";

export const useGetUserQuery = (): UseQueryResult<AxiosResponse<IUser>, AxiosError<IError>> => {
  const axios = createApi()
  return useQuery({
    queryKey: ["get-user"],
    queryFn: async (): Promise<AxiosResponse<IUser>> => {
      const res = await axios.get("user")
      return res
    }
  });
};
