import { CustomButtonProps } from "./CustomButtonProps"
import { Button } from "@/components/ui/button"
export const CustomButton: React.FC<CustomButtonProps> = ({ text = "button", type, onClick }) => {
  return <Button
    className="bg-[#99BC85] mt-[10px] rounded-[5px] text-center h-[40px] w-[200px] scroll-m-20  font-extrabold tracking-tight text-[20px]"
    onClick={onClick} type={type}>
    {text}
  </Button>
}
