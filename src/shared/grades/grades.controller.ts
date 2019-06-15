import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { StudentScheduleService } from "../student.schedule/student-schedule.service";
import { UserEntity } from "../decorators/user-entity.decorator";
import { User } from "../database/models/User.entity";

/**
 * This controller only allows for viewing of grades.
 * The add and update functions is implemented at the admins folder
 */
@Controller("/grades")
export class GradesController {
  constructor(
    private readonly studentScheduleService: StudentScheduleService,
  ) {}
  
  @Get()
  @UseGuards(AuthGuard("bearer"))
  public async getGrades(@UserEntity() user: User) {
    const userSchedules = await this.studentScheduleService.findAllBySemester(user.id, "");
    console.log(userSchedules);
    return userSchedules;
  }
}
