import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { CustomErrorMessageProps } from "./CustomErrorMessageProps"
export const CustomeErrorMessage: React.FC<CustomErrorMessageProps> = ({ text }) => {
  return (
    <Alert variant="destructive" className="absolute top-[70vh] right-0 bg-[#CAE8BD] border-[#99A799] border-2 rounded-l-[15px] border-r-0 flex flex-col justify-center pl-[20px] h-[80px] w-[300px]">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {text}
      </AlertDescription>
    </Alert>
  )
}
