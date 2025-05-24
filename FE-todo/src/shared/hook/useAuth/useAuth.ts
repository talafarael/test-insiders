"use client"
import { useAuthMutation } from "@/src/api/auth/useMutation";
import { useTokenStore } from "@/src/store/tokestore";
import { useRouter } from "next/navigation";
import { IAuthVariables } from "../../type/auth/IAuthVariables";

export const useAuth = () => {
  const authMutation = useAuthMutation()
  const router = useRouter();
  const { createToken } = useTokenStore()
  const handlerAuth = async (data: IAuthVariables) => {
    try {
      const response = await authMutation.mutateAsync(data)
      if (response.data.token) {
        createToken(response.data.token)
        router.push("/main")
      }
    } catch (e) {
      console.error(e)
    }
  }
  return {
    ...authMutation, handlerAuth
  }
}
