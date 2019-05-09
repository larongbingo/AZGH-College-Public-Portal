import { Provider } from "@nestjs/common";

import { UserDetails } from "../database/models/UserDetails.entity";

export const USER_DETAILS_REPOSITORY = "USER_DETAILS_REPOSITORY";

export const UserDetailsProvider: Provider = {
  provide: USER_DETAILS_REPOSITORY,
  useValue: UserDetails,
};
