"use client"

import { useForm } from "react-hook-form";
import { LoginProps } from "./props/LoginProps";
import { RegistrationProps } from "./props/RegistrationProps";
import { InputController } from "@/src/Molecules/InputController";
import { LoginFormData } from "./data/LoginForm.data";
import { RegistartionFormData } from "./data/RegistrationForm.data";
import { CustomButton } from "@/src/Atoms/CustomButton";
import { useAuth } from "@/src/shared/hook/useAuth/useAuth";
import { CustomeErrorMessage } from "@/src/Atoms/CustomErrorMessage";
import { IAuthVariables } from "@/src/shared/type/auth/IAuthVariables";
type FormDataFor<T extends "login" | "register"> = T extends "login"
  ? LoginProps
  : RegistrationProps;
export const AuthForm = (
  { typePage }: AuthFormProps
) => {
  const { handlerAuth, error } = useAuth()

  const { control, handleSubmit, formState: { errors } } = useForm<LoginProps | RegistrationProps>({});
  const handleFormSubmit = async (data: FormDataFor<typeof typePage>) => {
    const body = {
      typePage,
      body: data as FormDataFor<typeof typePage>,
    } as IAuthVariables
    await handlerAuth(body);
  };
  const inputData = typePage == "login" ? LoginFormData : RegistartionFormData

  return (
    <form
      onSubmit={
        handleSubmit(handleFormSubmit)
      }
    >
      <InputController control={control} errors={errors} inputData={inputData} />
      {error && <CustomeErrorMessage text={error?.message} />}
      <CustomButton text="Submit" type="submit" />
    </form >
  )
}
