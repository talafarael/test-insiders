"use client"

import { Controller, useForm } from "react-hook-form";
import { InputController } from "../InputController";
import { CustomeErrorMessage } from "@/src/Atoms/CustomErrorMessage";
import { CustomButton } from "@/src/Atoms/CustomButton";
import { ContributorFormData } from "./data/ContributorForm.data";
import { IAddContributionForm } from "@/src/shared/type/contributor/IAddContributorForm";
import { ContributorFormProps } from "./ContributorFormProps";

export const ContributorForm: React.FC<ContributorFormProps> = ({ handleFormSubmit, error }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IAddContributionForm>({});

  return (
    <form
      className="flex flex-col items-center justify-center  w-full"

      onSubmit={
        handleSubmit(handleFormSubmit)
      }
    >
      <InputController control={control} errors={errors} inputData={ContributorFormData} />
      <div className="w-full max-w-md my-4">
        <Controller
          control={control}
          name="role"
          rules={{
            required: "Role is required"
          }}
          render={({ field, fieldState: { error } }) => (
            <div>
              <select
                {...field}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${error ? "border-red-500" : "border-gray-300"
                  }`}
              >
                <option value="">select...</option>
                <option value="READER">Reader</option>
                <option value="WRITER">Writer</option>
              </select>
              {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
            </div>
          )}
        />
      </div>
      {error && <CustomeErrorMessage text={error?.message} />}
      <CustomButton text="Submit" type="submit" />

    </form >

  )
}
