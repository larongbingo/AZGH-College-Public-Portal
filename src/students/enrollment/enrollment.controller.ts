import { Controller, Post, Body, UseGuards, Inject, Headers } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { UserService } from "../../shared/user/user.service";

import { EnrollmentService } from "./enrollment.service";
import { EnrollStudentDto } from "./dto/enroll-student.dto";

@Controller("enrollment")
export class EnrollmentController {
  constructor(
    @Inject() private readonly enrollmentService: EnrollmentService,
    @Inject() private readonly userService: UserService,
  ) {}

  @Post("enroll")
  @UseGuards(AuthGuard("bearer"))
  public async enrollStudent(@Body() enrollStudentDto: EnrollStudentDto, @Headers("authorization") token: string) {
    const user = await this.userService.findOneByToken(token.split(" ")[1]);
    await this.enrollmentService.enrollSubject(user.id, enrollStudentDto.subjectCode);
    return {iat: Date.now()};
  }

  @Post("drop")
  @UseGuards(AuthGuard("bearer"))
  public async dropStudent(@Body() enrollStudentDt: EnrollStudentDto, @Headers("authorization") token: string) {
    const user = await this.userService.findOneByToken(token.split(" ")[1]);
    await this.enrollmentService.dropSubject(user.id);
    return {iat: Date.now()};
  }
}
