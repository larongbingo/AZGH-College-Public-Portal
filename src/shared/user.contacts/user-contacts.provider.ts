import { Provider } from "@nestjs/common";

import { UserContacts } from "../database/models/UserContacts.entity";

export const USER_CONTACTS_REPOSITORY = "USER_CONTACTS_REPOSITORY";

export const UserContactsProvider: Provider = {
  provide: USER_CONTACTS_REPOSITORY,
  useValue: UserContacts,
};
