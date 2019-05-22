import { Injectable, Inject, UnprocessableEntityException } from "@nestjs/common";

import { SubjectsService } from "../../shared/subjects/subjects.service";
import { UserService } from "../../shared/user/user.service";

@Injectable()
export class EnrollmentService {
  constructor(
    private readonly subjectsService: SubjectsService,
    private readonly userService: UserService,
  ) {}

  /**
   * Assigns or enrolls a course or program to a user
   * @param userId the id of the user
   * @param subjectCode the code of the course the user wants to enroll
   */
  public async enrollSubject(userId: string, subjectCode: string) {
    const [subject, user] = await Promise.all([
      this.subjectsService.findOneById(subjectCode),
      this.userService.findOneById(userId),
    ]);

    user.enrolledProgram = subject.subjectCode;
    await user.save();

    return user;
  }
}
