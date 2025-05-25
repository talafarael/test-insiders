"use client"
import { CreateBoardWindow } from "@/src/Organisms/CreateBoardWindow"
import { useUserStore } from "@/src/store/userStore"
import { usePathname } from "next/navigation";

export const Header = () => {
  const { user } = useUserStore()
  const pathname = usePathname();

  return (
    <div className="bg-[#73946B] h-[100px] items-center  w-[100vw] flex justify-between">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hello! {user?.name}
      </h1>
      <CreateBoardWindow />
    </div>
  )
}
