import { Controller, Get, Post, Put, UseGuards, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Op } from "sequelize";

import { UserEntity } from "../decorators/user-entity.decorator";
import { IUser } from "../interfaces/models/IUser";

import { UserPreviousSchoolService } from "./user-previous-school.service";
import { CreateUserPreviousSchoolDto } from "./dto/create-user-previous-school.dto";
import { UpdateUserPreviousSchooolDto } from "./dto/update-user-previous-school.dto";

@Controller("/user/school")
export class UserPreviousSchoolController {
  constructor(
    private readonly userPreviousSchoolService: UserPreviousSchoolService,
  ) {}

  @Get()
  @UseGuards(AuthGuard("bearer"))
  public async getSchool(@UserEntity() user: IUser) {
    const userSchool = await this.userPreviousSchoolService.findOne({where: {userId: {[Op.eq]: user.userId}}});
    return {
      schoolType: userSchool.schoolType,
      schoolName: userSchool.schoolName,
      program: userSchool.program,
      dateOfGraduation: userSchool.dateOfGraduation,
      schoolYear: userSchool.schoolYear,
      yearOrGrade: userSchool.yearOrGrade,
      term: userSchool.term,
    };
  }

  @Post()
  @UseGuards(AuthGuard("bearer"))
  public async createSchool(
    @Body() createUserPreviousSchoolDto: CreateUserPreviousSchoolDto,
    @UserEntity() user: IUser,
  ) {
    await this.userPreviousSchoolService.create({
      ...createUserPreviousSchoolDto,
      userId: user.userId,
    });
    return {iat: Date.now()};
  }

  @Put()
  @UseGuards(AuthGuard("bearer"))
  public async updateSchool(
    @Body() updateUserPreviousSchoolDto: UpdateUserPreviousSchooolDto,
    @UserEntity() user: IUser,
  ) {
    const userSchool = await this.userPreviousSchoolService.findOne({where: {userId: {[Op.eq]: user.userId}}});
    Object.keys(updateUserPreviousSchoolDto).forEach(key => userSchool[key] = updateUserPreviousSchoolDto[key]);
    await userSchool.save();
    return {iat: Date.now()};
  }
}
