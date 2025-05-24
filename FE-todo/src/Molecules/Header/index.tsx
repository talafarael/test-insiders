import { CreateBoardWindow } from "@/src/Organisms/CreateBoardWindow"
import { useUserStore } from "@/src/store/userStore"

export const Header = () => {
  const { user } = useUserStore()

  return (
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hello! {user?.name}
      </h1>
      <CreateBoardWindow />
    </div>
  )
}
