"use client"
import { useTaskBoardStore } from "@/src/store/taskBoard"

export const HeaderTask = () => {
  const { taskBoard } = useTaskBoardStore()
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Title:{taskBoard?.title}</h2>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">Description:{taskBoard?.description}</h3>
    </div>
  )
}
