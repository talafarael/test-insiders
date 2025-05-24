import { LoginProps } from "@/src/Organisms/AuthForm/props/LoginProps"
import { RegistrationProps } from "@/src/Organisms/AuthForm/props/RegistrationProps"

export interface ILoginVariables {
  typePage: "login"
  body: LoginProps
}

export interface IRegistrationVariables {
  typePage: "register"
  body: RegistrationProps
}

export type IAuthVariables = ILoginVariables | IRegistrationVariables
