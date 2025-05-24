import { useTaskBoardStore } from "@/src/store/taskBoard"

export const headerTask = (props: {}) => {
  const { taskBoard } = useTaskBoardStore()
  return (
    <div>
      <h1>{taskBoard?.title}</h1>
      <p>{taskBoard?.description}</p>
    </div>
  )
}
