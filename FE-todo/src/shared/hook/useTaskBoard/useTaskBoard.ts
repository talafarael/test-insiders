import { useCreateTaskBoardhMutation } from "@/src/api/taskBaord/useMutation"
import { ICreateTaskBoard } from "../../type/taskBorad/ICreateTaskBoard"
import { useQueryClient } from "@tanstack/react-query"
import { useGetTaskBoardQuery } from "@/src/api/taskBaord/useQuery"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useTaskBoardStore } from "@/src/store/taskBoard"

export const useCreateTaskBoard = () => {
  const createTaskBoardMutation = useCreateTaskBoardhMutation()
  const queryClient = useQueryClient();

  const handlerCreateTaskBoard = async (data: ICreateTaskBoard) => {
    try {
      await createTaskBoardMutation.mutateAsync(data)
      queryClient.invalidateQueries({ queryKey: ["get-user"] });
      return true
    } catch (e) {
      console.error(e)
    }
  }
  return {
    ...createTaskBoardMutation, handlerCreateTaskBoard
  }
}

export const useGetTaskBoard = () => {
  const params = useParams();
  const id = params.id;
  const { addTaskBoard, removeTaskBoard } = useTaskBoardStore()

  const { data, error, isLoading, isError } = useGetTaskBoardQuery(id as string)
  useEffect(() => {
    removeTaskBoard()
  }, [error, isError])
  useEffect(() => {
    if (data && data?.data) addTaskBoard(data.data)
  }, [data])
  return { data, error, isLoading }
}
