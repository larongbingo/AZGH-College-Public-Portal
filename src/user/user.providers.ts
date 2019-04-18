import { User } from "../database/models/User.entity";

export const catsProviders = [
  {
    provide: "USERS_REPOSITORY",
    useValue: User,
  },
];
