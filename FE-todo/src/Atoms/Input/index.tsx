import { Input } from "@/components/ui/input"
import { InputProps } from "./InputProps"

export const CustomInput: React.FC<InputProps> = ({ validation, field, placeholder, error, type }) => {
  return (
    <div className=" flex w-full max-w-sm items-center space-x-2">
      < Input
        {...field}
        type={type}
        value={field.value || ""}
        placeholder={placeholder}
      />
      {
        !error && !validation.required &&
        <p className="text-[#6A6A6A] opacity-65 text-sm">
          "*This field is optional"
        </p>
      }
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div >
  )
}
