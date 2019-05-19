import { Provider } from "@nestjs/common";

import { UserGuardian } from "../database/models/UserGuardian.entity";

export const USER_GUARDIAN_REPOSITORY = "USER_GUARDIAN_REPOSITORY";

export const UserGuardianProvider: Provider = {
  provide: USER_GUARDIAN_REPOSITORY,
  useValue: UserGuardian,
};
