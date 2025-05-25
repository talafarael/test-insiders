import { AuthForm } from "@/src/Organisms/AuthForm"
import Link from "next/link"
export const Login = () => {
  return (
    < div className="w-[100vw] bg-[#ECFAE5]  h-[100vh] flex  justify-center items-center  p-6 rounded-xl shadow-lg" >
      <div className="w-[500px] bg-[#B0DB9C] flex justify-center items-center flex-col h-[500px] opacity-600 rounded-[15px]">
        <h1 className="scroll-m-20 text-4xl mb-[50px] font-extrabold tracking-tight lg:text-5xl">
          Login
        </h1>
        <AuthForm typePage="login" />
        <Link href="/auth/registration" className="scroll-m-20 border-b pb-2 text-1xl mt-[20px] cursor-pointer font-semibold tracking-tight first:mt-0">
          Enter to register
        </Link>
      </div>

    </div >
  )
}
