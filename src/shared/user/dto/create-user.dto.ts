import { IUser, UserType } from "../../interfaces/models/IUser";

export class CreateUserDto implements IUser {
  public readonly enrolledProgram?: string;
  public readonly username: string;
  public readonly password: string;
  public readonly userId?: string;
  public readonly type: UserType;
}
