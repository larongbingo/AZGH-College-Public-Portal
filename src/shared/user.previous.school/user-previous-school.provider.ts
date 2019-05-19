import { Provider } from "@nestjs/common";

import { UserPreviousSchool } from "../database/models/UserPreviousSchool.entity";

export const USER_PREVIOUS_SCHOOL_REPOSITORY = "USER_PREVIOUS_SCHOOL_REPOSITORY";

export const UserPreviousSchoolProvider: Provider = {
  provide: USER_PREVIOUS_SCHOOL_REPOSITORY,
  useValue: UserPreviousSchool,
};
