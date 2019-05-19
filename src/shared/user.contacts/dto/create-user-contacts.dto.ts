import { IUserContacts } from "src/shared/interfaces/models/IUserContacts";

export class CreateUserContactsDto {
  public readonly telephoneNumber?: string;
  public readonly mobileNumber: string;
  public readonly emailAddress: string;
}
