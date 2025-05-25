import { Input } from "@/components/ui/input"
import { InputProps } from "./InputProps"

export const CustomInput: React.FC<InputProps> = ({ validation, field, placeholder, error, type }) => {
  return (
    <div className=" flex w-full flex-col h-[70px] items-start justifyt-start max-w-sm items-center space-x-2">
      < Input
        className="rounded-[5px] bg-[#DDF6D2] h-[40px] border-[#004526] text-[#004526]"
        {...field}
        type={type}
        value={field.value || ""}
        placeholder={placeholder}
      />
      {
        !error && !validation.required &&
        <p className="text-[#004526] opacity-65 flex w-full  items-start text-sm">
          This field is optional
        </p>
      }
      {error && <p className="text-[#004526] h-[10px] text-sm">{error}</p>}
    </div >
  )
}
