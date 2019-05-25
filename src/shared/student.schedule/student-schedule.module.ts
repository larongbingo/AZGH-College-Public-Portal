import { Module } from "@nestjs/common";
import { StudentScheduleProvider } from "./student-schedule.provider";
import { StudentScheduleService } from "./student-schedule.service";

@Module({
  providers: [StudentScheduleProvider, StudentScheduleService],
  exports: [StudentScheduleService],
})
export class StudentScheduleModule {}
