import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ContributorForm } from "../ContributorForm"
import { useContributor } from "@/src/shared/hook/useContributor/useContributor"
import { IAddContributionForm } from "@/src/shared/type/contributor/IAddContributorForm"
import { AxiosError } from "axios"
import { IError } from "@/src/shared/type/api/IError"
import { useState } from "react"

export const AddContributorWindow = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false)
  const { error, handlerAddContributor } = useContributor()
  const handlerAddContributorSubmit = async (data: IAddContributionForm) => {
    const body = {
      ...data,
      id: id
    }
    const res = await handlerAddContributor(body)
    if (res) setOpen(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger >
        <Button variant="outline">
          Open Dialog
        </Button>
      </DialogTrigger>

      <DialogContent className=" [&>button]:hidden  flex items-center justify-center max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%]">
        <DialogHeader className="mb-4 flex justify-center">
          <DialogTitle className="text-xl font-semibold text-gray-900 mb-2">
            Are you absolutely sure?
          </DialogTitle>
          <ContributorForm
            handleFormSubmit={handlerAddContributorSubmit}
            error={error as AxiosError<IError>}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>


  )
}
