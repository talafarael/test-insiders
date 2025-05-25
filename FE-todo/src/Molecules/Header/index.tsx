"use client"
import { CreateBoardWindow } from "@/src/Organisms/CreateBoardWindow"
import { useUserStore } from "@/src/store/userStore"
import Link from "next/link"

export const Header = () => {
  const { user } = useUserStore()

  return (
    <div className="bg-[#73946B] h-[100px] items-center  w-[100vw] flex justify-between">
      <Link href={"/main"} className=" ml-[15px] scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hello! {user?.name}
      </Link>
      <CreateBoardWindow />
    </div>
  )
}
