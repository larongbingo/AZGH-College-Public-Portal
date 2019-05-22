import { Injectable, Inject, UnprocessableEntityException } from "@nestjs/common";

import { SubjectsService } from "../../shared/subjects/subjects.service";
import { UserService } from "../../shared/user/user.service";
import { User } from "../database/models/User.entity";

@Injectable()
export class EnrollmentService {
  constructor(
    private readonly subjectsService: SubjectsService,
  ) {}

  /**
   * Assigns or enrolls a course or program to a user
   * @param userId the id of the user
   * @param subjectCode the code of the course the user wants to enroll
   */
  public async enrollSubject(user: User, subjectCode: string) {
    const subject = await this.subjectsService.findOneById(subjectCode);

    user.enrolledProgram = subject.subjectCode;
    await user.save();

    return user;
  }
}
