import { Provider } from "@nestjs/common";

import { User } from "../database/models/User.entity";

export const USER_REPOSITORY = "USER_REPOSITORY";

export const UserRepositoryProvider: Provider = {
  provide: USER_REPOSITORY,
  useValue: User,
};
