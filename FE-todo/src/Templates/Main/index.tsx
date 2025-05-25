"use client"
import { ItemTaskBoard } from "@/src/Atoms/ItemTaskBoard"
import { useUserStore } from "@/src/store/userStore"

export const Main = () => {
  const { user } = useUserStore()

  return (
    <div className="w-[85vw] grid-cols-2 grid gap-[5vw] gap-y-[20px] mb-6 flex items-center justify-center">
      {user && user.taskBoard.map((elem) => (
        <ItemTaskBoard taskBoard={elem} key={elem.id} />
      ))}
    </div>
  )
}
