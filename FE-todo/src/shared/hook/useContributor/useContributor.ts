import { useAddContributorMutation } from "@/src/api/contributor/useMutation"
import { IAddContribution } from "../../type/contributor/IAddContribution"



export const useContributor = () => {
  const addContributorMutation = useAddContributorMutation()
  const handlerAddContributor = async (data: IAddContribution) => {
    try {
      const response = await addContributorMutation.mutateAsync(data)
      return response
    } catch (e) {

      console.error(e)
    }
  }
  return {
    ...addContributorMutation, handlerAddContributor
  }
}

