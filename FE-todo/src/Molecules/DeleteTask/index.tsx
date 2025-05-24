import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useDeleteTaskMutation } from "@/src/api/task/useMutation"
import { useDeleteTask } from "@/src/shared/hook/useTask/useTask"
export const DeleteTask = ({ id }: { id: string }) => {
  const { handlerDelteTask, error } = useDeleteTask()
  const handlerDelete = async () => {
    await handlerDelteTask(id)
  }

  return (
    <Dialog>
      <Button variant="outline">
        <DialogTrigger>Delete</DialogTrigger>
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <h1>{error && error?.message}</h1>
          <Button onClick={handlerDelete}>dele task</Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
