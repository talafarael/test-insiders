import { CustomButtonProps } from "./CustomButtonProps"
import { Button } from "@/components/ui/button"
export const CustomButton: React.FC<CustomButtonProps> = ({ text = "button", type, onClick }) => {
  return <button onClick={onClick} type={type}>{text}</button>
}
