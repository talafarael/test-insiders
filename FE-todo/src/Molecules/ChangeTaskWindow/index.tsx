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
import { Description } from "@radix-ui/react-dialog"
import { AxiosError } from "axios"
import { describe } from "node:test"
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
  })
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
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Change task</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <TaskForm
            title={task?.title}
            description={task?.description}
            error={error as AxiosError<IError>} handlerSubmit={handlerTaskSubmit} />
        </div>

      </DialogContent>

    </Dialog>
  )
}
