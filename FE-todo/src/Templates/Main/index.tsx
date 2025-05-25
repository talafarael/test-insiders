"use client"
import { ItemTaskBoard } from "@/src/Atoms/ItemTaskBoard"
import { useUserStore } from "@/src/store/userStore"

export const Main = () => {
  const { user } = useUserStore()
  console.log(user?.contributions[0].taskBoard)
  return (
    <div className="min-h-[100vh]">
      <h1 className="scroll-m-20 mb-[15px] text-4xl font-extrabold tracking-tight lg:text-5xl">
        Your task</h1>
      <div className="w-[85vw] grid-cols-2 grid gap-[5vw] gap-y-[20px] mb-6 flex items-center justify-center">
        {user && user.taskBoard.map((elem) => (
          <ItemTaskBoard taskBoard={elem} key={elem.id} />
        ))}
      </div>
      <h1 className="scroll-m-20 mb-[15px] text-4xl font-extrabold tracking-tight lg:text-5xl">
        Contributions</h1>
      <div className="w-[85vw] grid-cols-2 grid gap-[5vw] gap-y-[20px] mb-6 flex items-center justify-center">
        {user && user.contributions.map((elem) => (
          <ItemTaskBoard taskBoard={elem.taskBoard} key={elem.taskBoard.id} />
        ))}
      </div>
    </div>
  )
}
