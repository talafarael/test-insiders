import { ContributorsRole } from "../enum/contributer-role.enum"



export class CreateContributerDto {
  role: ContributorsRole
  id: string
  email: string
}
