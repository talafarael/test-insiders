import { IError } from "@/src/shared/type/api/IError";
import { IAddContribution } from "@/src/shared/type/contributor/IAddContribution";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { createApi } from "../axios";

export const useAddContributorMutation = (): UseMutationResult<AxiosResponse<boolean>, AxiosError<IError>, IAddContribution> => {
  const axios = createApi()
  return useMutation<AxiosResponse<boolean>, AxiosError<IError>, IAddContribution>({
    mutationFn: async ({ id, email, role }: IAddContribution) => {

      return await axios.post("contributer", { id, email, role });
    },
  });
};

