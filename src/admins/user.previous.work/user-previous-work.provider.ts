import { Provider } from "@nestjs/common";

import { UserPreviousWork } from "../../shared/database/models/UserPreviousWork.entity";

export const USER_PREVIOUS_WORK_REPOSITORY = "USER_PREVIOUS_WORK_REPOSITORY";

export const UserPreviousWorkProvider: Provider = {
  provide: USER_PREVIOUS_WORK_REPOSITORY,
  useValue: UserPreviousWork,
};
