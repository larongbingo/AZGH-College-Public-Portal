import { Provider } from "@nestjs/common";

import { StudentSchedule } from "../database/models/StudentSchedule.entuty";

export const STUDENT_SCHEDULE_PROVIDER = "STUDENT_SCHEDULE_PROVIDER";

export const StudentScheduleProvider: Provider = {
  provide: STUDENT_SCHEDULE_PROVIDER,
  useValue: StudentSchedule,
};
