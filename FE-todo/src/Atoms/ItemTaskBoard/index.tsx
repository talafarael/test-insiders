"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CustomButton } from "../CustomButton"
import { ItemTaskBoardProps } from "./ItemTaskBoardProps"
import { useRouter } from "next/navigation";

export const ItemTaskBoard: React.FC<ItemTaskBoardProps> = ({ taskBoard }) => {
  const router = useRouter();

  const handlerEnterToTaskBoard = () => {
    router.push(`taskBoard/${taskBoard.id}`)
  }
  return (
    <Card >
      <CardHeader>
        <CardTitle>{taskBoard.title}</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription>{taskBoard.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <CustomButton onClick={handlerEnterToTaskBoard} text="Enter to task Borad">
        </CustomButton>
      </CardFooter>
    </Card>

  )
}
