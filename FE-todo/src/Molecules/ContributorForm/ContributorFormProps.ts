import { AxiosError } from "axios"
import { IError } from "@/src/shared/type/api/IError"
import { IAddContributionForm } from "@/src/shared/type/contributor/IAddContributorForm"

export interface ContributorFormProps {
  handleFormSubmit: (data: IAddContributionForm) => void
  error?: AxiosError<IError>

}

