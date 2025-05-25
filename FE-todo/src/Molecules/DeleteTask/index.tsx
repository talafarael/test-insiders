import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { CustomButton } from "@/src/Atoms/CustomButton"
import { useDeleteTask } from "@/src/shared/hook/useTask/useTask"
export const DeleteTask = ({ id }: { id: string }) => {
  const { handlerDelteTask, error } = useDeleteTask()
  const handlerDelete = async () => {
    await handlerDelteTask(id)
  }

  return (
    <Dialog>
      <DialogTrigger >
        <Button variant="outline">
          Open Dialog
        </Button>
      </DialogTrigger>

      <DialogContent className=" [&>button]:hidden  flex items-center justify-center max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]">
        <DialogHeader className="mb-4 flex justify-center">
          <DialogTitle className="text-xl font-semibold text-gray-900 mb-2">
            Are you absolutely sure?
          </DialogTitle>
          {error && (
            <h1 className="text-sm text-red-600 mb-4">
              {error.message}
            </h1>
          )}
          <CustomButton
            onClick={handlerDelete}
            text="Delte task"
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
