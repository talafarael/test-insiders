"use client"
import { Controller } from "react-hook-form"
import { ItemInputControllerProps } from "./ItemInputControllerProps"
import { CustomInput } from "@/src/Atoms/Input"

export const ItemInputController: React.FC<ItemInputControllerProps> = ({ inputData, control, errors }) => {
  return (
    <div>
      <Controller
        name={inputData.name}
        control={control}
        rules={inputData.validation}
        render={({ field }) => (
          <CustomInput
            type={inputData.type}
            field={field}
            placeholder={inputData.placeholder}
            error={errors[inputData.name]?.message}
            validation={inputData.validation}
          />
        )}
      />

    </div>
  )
}
