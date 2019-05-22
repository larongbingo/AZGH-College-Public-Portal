import { Controller, Post, Body, UseGuards, Inject, Headers } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { UserEntity } from "../../shared/decorators/user-entity.decorator";
import { User } from "../database/models/User.entity";

import { EnrollmentService } from "./enrollment.service";
import { EnrollStudentDto } from "./dto/enroll-student.dto";

@Controller("enrollment")
export class EnrollmentController {
  constructor(
    private readonly enrollmentService: EnrollmentService,
  ) {}

  @Post("enroll")
  @UseGuards(AuthGuard("bearer"))
  public async enrollStudent(@Body() enrollStudentDto: EnrollStudentDto, @UserEntity() user: User) {
    await this.enrollmentService.enrollSubject(user, enrollStudentDto.subjectCode);
    return {iat: Date.now()};
  }
}
