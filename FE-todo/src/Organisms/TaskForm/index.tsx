"use client"
import { InputController } from "@/src/Molecules/InputController";
import { TaskFormProps } from "./TaskformProps";
import { TaskData } from "./data/TaskForm.data";
import { useForm } from "react-hook-form";
import { ICreateTask } from "@/src/shared/type/task/ICreatetask";
import { CustomeErrorMessage } from "@/src/Atoms/CustomErrorMessage";
import { CustomButton } from "@/src/Atoms/CustomButton";
import { ICreateTaskForm } from "@/src/shared/type/task/ICreateTaskForm";
//yep this seem components as CreateBoard but i think we must separate these two components
export const TaskForm: React.FC<TaskFormProps> = ({ title = "", description = "", handlerSubmit, error }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<ICreateTaskForm>({
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
      <InputController control={control} errors={errors} inputData={TaskData} />
      {error && <CustomeErrorMessage text={error?.message} />}
      <CustomButton text="Submit" type="submit" />

    </form>
  )
}








