DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useDeleteTaskMutation } from "@/src/api/task/useMutation"
import { CustomButton } from "@/src/Atoms/Button"
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

      <DialogContent className="[&>button]:hidden rounded-[5px] relative fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[300px] h-[250px] flex flex-col items-center justify-center bg-[#B0DB9C]">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <h1>{error && error?.message}</h1>
          <CustomButton ha={handlerDelete} text="Delete task" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
