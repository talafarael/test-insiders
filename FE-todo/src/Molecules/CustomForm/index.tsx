import { Controller, FieldValues, useForm } from "react-hook-form"
import { CustomFormProps } from "./CustomFormProps"
import { CustomeErrorMessage } from "@/src/Atoms/CustomErrorMessage"
import { CustomButton } from "@/src/Atoms/CustomButton"
import { InputController } from "../InputController"
export const CustomForm = <T extends FieldValues,>({ handleFormSubmit, form, config, apiError }: CustomFormProps<T>) => {
  return (
    <form
      className="flex flex-col items-center justify-center  w-full"
      onSubmit={
        form.handleSubmit(handleFormSubmit)
      }
    >
      <InputController
        inputData={config}
        control={form.control}
        errors={form.formState.errors}
      />
      {error && <CustomeErrorMessage text={error?.message} />}
      <CustomButton text="Submit" type="submit" />



    </form>
  )
}
