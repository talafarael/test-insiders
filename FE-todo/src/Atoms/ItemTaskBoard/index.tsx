"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CustomButton } from "../CustomButton"
import { ItemTaskBoardProps } from "./ItemTaskBoardProps"
import { useRouter } from "next/navigation";

export const ItemTaskBoard: React.FC<ItemTaskBoardProps> = ({ taskBoard }) => {
  const router = useRouter();

  const handlerEnterToTaskBoard = () => {
    router.push(`main/taskBoard/${taskBoard.id}`)
  }
  return (
    <Card className="bg-[#DDF6D2] shadow-md w-[40vw] h-[220px]">

      <CardHeader>
        <CardTitle className=" text-4xl font-extrabold tracking-tight lg:text-5xl">{taskBoard.title}</CardTitle>
        <CardDescription className="scroll-m-20 text-2xl font-semibold tracking-tight"> {taskBoard.description}</CardDescription>
      </CardHeader>
      <CardContent className=" ">
        <CustomButton onClick={handlerEnterToTaskBoard} text="Open the board">
        </CustomButton>
      </CardContent>
    </Card>

  )
}
