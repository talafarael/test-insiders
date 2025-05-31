import { FieldValues, UseFormReturn } from "react-hook-form";

export interface CustomFormProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  handleFormSubmit: (data: T) => void
  apiError: any

}
