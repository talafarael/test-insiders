import { AlertCircle } from "lucide-react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { CustomErrorMessageProps } from "./CustomErrorMessageProps"
export const CustomeErrorMessage: React.FC<CustomErrorMessageProps> = ({ text }) => {
  return (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        {text}
      </AlertDescription>
    </Alert>
  )
}
