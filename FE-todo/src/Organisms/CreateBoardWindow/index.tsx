"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useCreateTaskBoard } from "@/src/shared/hook/useTaskBoard/useTaskBoard"
import { CreateBoardForm } from "../CreateBaordForm"
import { ICreateTaskBoard } from "@/src/shared/type/taskBorad/ICreateTaskBoard"
import { AxiosError } from "axios"
import { IError } from "@/src/shared/type/api/IError"
import { useState } from "react"
import { TaskForm } from "../TaskForm"
import { useCreateTask } from "@/src/shared/hook/useTask/useTask"
import { usePathname } from "next/navigation"

export const CreateBoardWindow = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname();

  const { handlerCreateTaskBoard, error } = useCreateTaskBoard()
  const { handlerCreateTask, error: errorCreateTask } = useCreateTask()
  const handlerSubmit = async (data: ICreateTaskBoard) => {
    const res = await handlerCreateTaskBoard(data)
    if (res) {
      setOpen(false)
    }
  }
  const handlerTaskSubmit = async (data: ICreateTaskBoard) => {
    const res = await handlerCreateTask(data)
    if (res) {
      setOpen(false)
    }

  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          {"/main" == pathname ?
            "Create task board"
            :
            "Create task"}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          {"/main" == pathname ?
            <CreateBoardForm error={error as AxiosError<IError>} handlerSubmit={handlerSubmit} />
            :
            <TaskForm error={errorCreateTask as AxiosError<IError>} handlerSubmit={handlerTaskSubmit} />}
        </div>

      </DialogContent>

    </Dialog>
  )
}
