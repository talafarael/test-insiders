"use client"
import { ItemTask } from "@/src/Atoms/ItemTask"
import { useTaskBoardStore } from "@/src/store/taskBoard"

export const ListTask = () => {
  const { taskBoard } = useTaskBoardStore()
  return (
    <div>
      {
        taskBoard?.tasks.map((elem) => (
          <ItemTask task={elem} key={elem.id} />
        ))
      }

    </div>
  )
}
