"use client"
import { ItemTask } from "@/src/Atoms/ItemTask"
import { useTaskBoardStore } from "@/src/store/taskBoard"

export const ListTask = () => {
  const { taskBoard } = useTaskBoardStore()
  return (
    <div className="w-[90vw] grid grid-cols-3 gap-4">
      {taskBoard ?
        taskBoard?.tasks.map((elem) => (
          <ItemTask task={elem} key={elem.id} />
        )) :
        <div className="w-[90vw] flex justify-center items-center h-[50vh]">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            You dosent have premission
          </h1>
        </div>

      }
    </div>
  )
}
