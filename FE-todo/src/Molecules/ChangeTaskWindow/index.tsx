import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TaskForm } from "@/src/Organisms/TaskForm"
import { useChagneTask } from "@/src/shared/hook/useTask/useTask"
import { IError } from "@/src/shared/type/api/IError"
import { IChangeTask } from "@/src/shared/type/task/IChangeTask"
import { ICreateTaskForm } from "@/src/shared/type/task/ICreateTaskForm"
import { ITask } from "@/src/shared/type/task/ITask"
import { useTaskBoardStore } from "@/src/store/taskBoard"
import { AxiosError } from "axios"
import { useEffect, useState } from "react"
export const ChangetaskWindow = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false)
  const { handlerChagneTask, error } = useChagneTask()
  const [task, setTask] = useState<ITask>()
  const { taskBoard } = useTaskBoardStore()
  useEffect(() => {
    const taskFind = taskBoard?.tasks.findLast((elem) => {
      if (elem.id == id) return elem
    })
    setTask(taskFind)
  }, [taskBoard, id])
  const handlerTaskSubmit = async (data: ICreateTaskForm) => {
    const body: IChangeTask = {
      title: data.title,
      description: data.description,
      id: id
    }

    const res = await handlerChagneTask(body)
    if (res) {
      setOpen(false)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          Change task
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[500px]   bg-[#ECFAE5] rounded-lg shadow-lg p-6 [&>button]:hidden flex-col flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold mb-4">Change task</DialogTitle>
        </DialogHeader>

        <div className="flex flex-col space-y-4">
          <TaskForm
            title={task?.title}
            description={task?.description}
            error={error as AxiosError<IError>}
            handlerSubmit={handlerTaskSubmit}
          />
        </div>
      </DialogContent>    </Dialog>
  )
}
