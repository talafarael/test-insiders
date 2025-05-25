import { ItemTaskProps } from "./ItemTaskProps"
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useChagneStateTask } from "@/src/shared/hook/useTask/useTask";
import { ChangetaskWindow } from "@/src/Molecules/ChangeTaskWindow";
import { DeleteTask } from "@/src/Molecules/DeleteTask";
export const ItemTask: React.FC<ItemTaskProps> = ({ task }) => {
  const { handlerChangeTask } = useChagneStateTask()
  const handlerChangeState = () => {
    handlerChangeTask({
      id: task.id,
      state: !task.isComplete
    })
  }
  return (
    <Card className="w-full bg-[#ECFAE5] max-w-[300px]  shadow-md rounded-lg  overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <CardTitle className={`text-lg font-semibold ${task.isComplete ? "line-through text-gray-400" : "text-gray-900"}`}>
            {task.title}
          </CardTitle>
          <Checkbox
            checked={task.isComplete}
            onCheckedChange={handlerChangeState}
            aria-label="Mark task complete"
            className="w-5 h-5 text-blue-600 rounded border border-gray-300 cursor-pointer"
          />
        </div>
      </CardHeader>

      <CardContent className="px-4 py-3">
        <p className={`${task.isComplete ? "line-through text-gray-400" : "text-gray-700"}`}>
          {task.description}
        </p>
      </CardContent>

      <CardFooter className="px-4 py-3 border-t border-gray-200 flex items-center justify-between gap-2">
        <div className="flex gap-2">
          <DeleteTask id={task.id} />
          <ChangetaskWindow id={task.id} />
        </div>
      </CardFooter>
    </Card>
  )
}
