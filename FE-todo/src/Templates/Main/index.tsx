"use client"
import { ItemTaskBoard } from "@/src/Atoms/ItemTaskBoard"
import { useUserStore } from "@/src/store/userStore"

export const Main = () => {
  const { user } = useUserStore()

  return (
    <div>
      {user && user.taskBoard.map((elem) => (
        <ItemTaskBoard taskBoard={elem} key={elem.id} />
      ))}
    </div>
  )
}
