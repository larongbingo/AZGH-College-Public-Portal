import { Injectable, BadRequestException } from "@nestjs/common";

import { StudentScheduleService } from "../student.schedule/student-schedule.service";

@Injectable()
export class GradesService {
  constructor(
    private readonly studentScheduleService: StudentScheduleService,
  ) {}

  public async addGrade(studentScheduleId: string, grade: string) {
    const studentSched = await this.studentScheduleService.findOneById(studentScheduleId);

    studentSched.grade = grade;
    await studentSched.save();
    
    return {iat: Date.now()};
  }

  public async findGradeBySemester(semester: string) {

  }

  public async findGrade() {
    
  }
}
