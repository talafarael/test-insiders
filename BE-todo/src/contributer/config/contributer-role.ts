import { ContributorsRole } from "../enum/contributer-role.enum";

export const contributorsRole: Record<Lowercase<ContributorsRole>, ContributorsRole> = {
  writer: "WRITER",
  reader: "READER"
} as const
