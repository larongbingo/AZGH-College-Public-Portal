import { User } from "../../database/models/User";

export interface ICheckPassword {
  checkPassword(plainText: string, user?: User): Promise<boolean>;
}
