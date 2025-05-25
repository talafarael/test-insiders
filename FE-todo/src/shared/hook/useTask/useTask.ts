"use client"
import { useQueryClient } from "@tanstack/react-query";
import { ICreateTaskForm } from "../../type/task/ICreateTaskForm";
import { useParams } from "next/navigation";
import { useChangeTaskMutation, useChnageStateTaskMutation, useCreateTaskMutation, useDeleteTaskMutation } from "@/src/api/task/useMutation";
import { IChangeStateTask } from "../../type/task/IChangeStateTask";
import { IChangeTask } from "../../type/task/IChangeTask";

export const useCreateTask = () => {
  const createTaskMutation = useCreateTaskMutation()
  const queryClient = useQueryClient();
  const params = useParams();

  const handlerCreateTask = async (data: ICreateTaskForm) => {
    try {

      const id = params.id as string
      const body = {
        taskBoardId: id,
        ...data
      }
      await createTaskMutation.mutateAsync(body)
      queryClient.invalidateQueries({ queryKey: ["get-task-board"] });
      return true
    } catch (e) {
      console.error(e)
    }
  }
  return {
    ...createTaskMutation, handlerCreateTask
  }
}
export const useChagneStateTask = () => {
  const cahgneStateTaskMutation = useChnageStateTaskMutation()
  const queryClient = useQueryClient();

  const handlerChangeTask = async (data: IChangeStateTask) => {
    try {
      await cahgneStateTaskMutation.mutateAsync(data)
      queryClient.invalidateQueries({ queryKey: ["get-task-board"] });
      return true
    } catch (e) {
      console.error(e)
    }
  }
  return {
    ...cahgneStateTaskMutation, handlerChangeTask
  }
}

export const useChagneTask = () => {
  const chagneTaskMutation = useChangeTaskMutation()
  const queryClient = useQueryClient();

  const handlerChagneTask = async (data: IChangeTask) => {
    try {

      await chagneTaskMutation.mutateAsync(data)
      queryClient.invalidateQueries({ queryKey: ["get-task-board"] });
      return true
    } catch (e) {
      console.error(e)
    }
  }
  return {
    ...chagneTaskMutation, handlerChagneTask
  }
}

export const useDeleteTask = () => {
  const deleteTaskMutation = useDeleteTaskMutation()
  const queryClient = useQueryClient();

  const handlerDelteTask = async (id: string) => {
    try {

      await deleteTaskMutation.mutateAsync(id)
      queryClient.invalidateQueries({ queryKey: ["get-task-board"] });
      return true
    } catch (e) {
      console.error(e)
    }
  }
  return {
    ...deleteTaskMutation, handlerDelteTask
  }
}
