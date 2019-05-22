import { Controller, Post, Body, UseGuards, Inject, Headers } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { UserEntity } from "../../shared/decorators/user-entity.decorator";
import { IUser } from "../../shared/interfaces/models/IUser";

import { EnrollmentService } from "./enrollment.service";
import { EnrollStudentDto } from "./dto/enroll-student.dto";

@Controller("enrollment")
export class EnrollmentController {
  constructor(
    private readonly enrollmentService: EnrollmentService,
  ) {}

  @Post("enroll")
  @UseGuards(AuthGuard("bearer"))
  public async enrollStudent(@Body() enrollStudentDto: EnrollStudentDto, @UserEntity() user: IUser) {
    await this.enrollmentService.enrollSubject(user.userId, enrollStudentDto.subjectCode);
    return {iat: Date.now()};
  }
}
