import { useCreateTaskBoardhMutation } from "@/src/api/taskBaord/useMutation"
import { ICreateTaskBoard } from "../../type/taskBorad/ICreateTaskBoard"
import { useQueryClient } from "@tanstack/react-query"

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

