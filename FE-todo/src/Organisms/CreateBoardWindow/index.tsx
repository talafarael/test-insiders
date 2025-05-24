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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCreateTaskBoard } from "@/src/shared/hook/useTaskBoard/useTaskBoard"
import { CreateBoardForm } from "../CreateBaordForm"
import { ICreateTaskBoard } from "@/src/shared/type/taskBorad/ICreateTaskBoard"
import { AxiosError } from "axios"
import { IError } from "@/src/shared/type/api/IError"
import { useState } from "react"

export const CreateBoardWindow = () => {
  const [open, setOpen] = useState(false)
  const { handlerCreateTaskBoard, error } = useCreateTaskBoard()
  const handlerSubmit = async (data: ICreateTaskBoard) => {
    const res = await handlerCreateTaskBoard(data)
    if (res) {
      setOpen(false)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create task board</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Create</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <CreateBoardForm error={error as AxiosError<IError>} handlerSubmit={handlerSubmit} />

        </div>

      </DialogContent>

    </Dialog>
  )
}
