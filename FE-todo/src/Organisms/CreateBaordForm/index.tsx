"use client"
import { useForm } from "react-hook-form";
import { CreateBoardFormProps } from "./CreateBoardFormProps"
import { CustomeErrorMessage } from "@/src/Atoms/CustomErrorMessage";
import { TaskBoardData } from "./data/TaskBoard.data";
import { InputController } from "@/src/Molecules/InputController";
import { CustomButton } from "@/src/Atoms/CustomButton";
import { useCreateTaskBoard } from "@/src/shared/hook/useTaskBoard/useTaskBoard";
import { ICreateTaskBoard } from "@/src/shared/type/taskBorad/ICreateTaskBoard";

export const CreateBoardForm: React.FC<CreateBoardFormProps> = ({ title = "", description = "", handlerSubmit, error }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<ICreateTaskBoard>({
    defaultValues: {
      title: title,
      description: description
    }
  });

  return (
    <form
      onSubmit={
        handleSubmit(handlerSubmit)
      }
    >
      <InputController control={control} errors={errors} inputData={TaskBoardData} />
      {error && <CustomeErrorMessage text={error?.message} />}
      <CustomButton text="Submit" type="submit" />

    </form>
  )
}
