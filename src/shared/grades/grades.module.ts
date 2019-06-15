import { Module } from "@nestjs/common";

import { GradesService } from "./grades.service";
import { GradesController } from "./grades.controller";
import { StudentScheduleModule } from "../student.schedule/student-schedule.module";

@Module({
  imports: [StudentScheduleModule],
  controllers: [GradesController],
  providers: [GradesService],
  exports: [GradesService],
})
export class GradesModule {}
