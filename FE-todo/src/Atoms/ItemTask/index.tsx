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
    <Card className="w-full max-w-md">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className={`text-lg font-semibold ${task.isComplete ? "line-through text-muted-foreground" : ""}`}>
            {task.title}
          </CardTitle>
          <Checkbox
            checked={task.isComplete}
            onCheckedChange={handlerChangeState}
            aria-label="Mark task complete"

          />
        </div>
      </CardHeader>
      <CardContent>
        <p className={`${task.isComplete ? "line-through text-muted-foreground" : ""}`}>
          {task.description}
        </p>
      </CardContent>
      <CardFooter>
        <DeleteTask id={task.id} />
        <ChangetaskWindow id={task.id} />
        <small className="text-sm text-muted-foreground">Board ID: {task.taskBoardId}</small>
      </CardFooter>
    </Card>
  )
}
