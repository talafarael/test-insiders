import { IInputData } from "@/src/shared/type/IInputData";

export const TaskBoardData: IInputData[] = [
  {
    name: "title",
    type: "text",
    placeholder: "Enter name",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        if (!/^@?[a-zA-Zа-яА-Яіїєґ0-9_\-.\s]{2,50}$/.test(value)) {
          return "Only letters and numbers allowed (2-50 characters)";
        }
        return true;
      },
    },
  },
  {
    name: "description",
    type: "text",
    placeholder: "Enter name",
    validation: {
      required: "This field is required",
      validate: (value: string) => {
        if (!/^@?[a-zA-Zа-яА-Яіїєґ0-9_\-.\s]{2,50}$/.test(value)) {
          return "Only letters and numbers allowed (2-50 characters)";
        }
        return true;
      },
    },
  },

]
