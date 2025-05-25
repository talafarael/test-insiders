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
  DialogOverlay

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
        <Button
          variant="outline"
          className="mr-[40px] h-[50px] w-[200px] text-[20px] rounded-[15px] bg-[#537D5D] leading-7"
        >
          {pathname === "/main" ? "Create task board" : "Create task"}
        </Button>
      </DialogTrigger>

      <DialogContent className="[&>button]:hidden rounded-[5px] relative fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[550px] h-[500px] flex flex-col items-center justify-center bg-[#B0DB9C]">
        <DialogHeader>
          <DialogTitle className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Create task board
          </DialogTitle>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          {pathname === "/main" ? (
            <CreateBoardForm
              error={error as AxiosError<IError>}
              handlerSubmit={handlerSubmit}
            />
          ) : (
            <TaskForm
              error={errorCreateTask as AxiosError<IError>}
              handlerSubmit={handlerTaskSubmit}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
