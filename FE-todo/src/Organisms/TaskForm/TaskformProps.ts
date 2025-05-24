import { IError } from "@/src/shared/type/api/IError"
import { ICreateTaskBoard } from "@/src/shared/type/taskBorad/ICreateTaskBoard"
import { AxiosError } from "axios"

export interface TaskFormProps {
  title?: string
  description?: string
  handlerSubmit: (data: ICreateTaskBoard) => void
  error?: AxiosError<IError>

}
