import { User } from "../database/models/User.entity";

import { USER_REPOSITORY } from "../constant/models";

export const catsProviders = [
  {
    provide: USER_REPOSITORY,
    useValue: User,
  },
];
