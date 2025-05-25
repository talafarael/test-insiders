"use client"
import { useTaskBoardStore } from "@/src/store/taskBoard"
import { AddContributorWindow } from "../AddContributorWindow"

export const HeaderTask = () => {
  const { taskBoard } = useTaskBoardStore()
  if (!taskBoard) {
    return null
  }
  return (
    <div className="bg-[#AAB999] h-[100px] flex justify-between w-[99vw] ">
      <div className="flex justify-center flex-col h-full">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ml-[20px]">
          Title:{taskBoard?.title}</h1>
        <h3 className=" text-2xl font-semibold tracking-tight mt-5px ml-[20px]">Description:{taskBoard?.description}</h3>
      </div>

      {taskBoard &&
        <AddContributorWindow id={taskBoard.id} />}
    </div>
  )
}
