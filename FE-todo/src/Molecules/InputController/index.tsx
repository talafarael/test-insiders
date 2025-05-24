"use client"
import { InputControllerProps } from "./InputControllerProps"
import { ItemInputController } from "../ItemInputController"
export const InputController: React.FC<InputControllerProps> = ({ inputData, control, errors }) => {
  return (
    <div>
      {
        inputData?.map((elem, index) => {
          return (
            <ItemInputController
              inputData={elem}
              control={control}
              errors={errors}
              key={index}
            />
          );
        })
      }
    </div>
  )
}
