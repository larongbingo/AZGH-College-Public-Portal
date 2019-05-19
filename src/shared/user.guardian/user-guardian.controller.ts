import { Controller, Get, Post, Put, UseGuards, Body } from "@nestjs/common";
import { Op } from "sequelize";
import { AuthGuard } from "@nestjs/passport";

import { UserEntity } from "../decorators/user-entity.decorator";
import { IUser } from "../interfaces/models/IUser";

import { CreateUserGuardianDto } from "./dto/create-user-guardian.,dto";
import { UpdateUserGuardianDto } from "./dto/update-user-guardian.dto";
import { UserGuardianService } from "./user-guardian.service";

@Controller("/user/guardian")
export class UserGuardianController {
  constructor(
    private readonly userGuardianService: UserGuardianService,
  ) {}

  @Get()
  @UseGuards(AuthGuard("bearer"))
  public async getGuardian(@UserEntity() user: IUser) {
    const userGuardian = await this.userGuardianService.findOne({where: {userId: {[Op.eq]: user.userId}}});
    return {
      firstName: userGuardian.firstName,
      middleName: userGuardian.middleName,
      lastName: userGuardian.lastName,
      mobileNumber: userGuardian.mobileNumber,
      emailAddress: userGuardian.emailAddress,
      occupation: userGuardian.occupation,
    };
  }

  @Post()
  @UseGuards(AuthGuard("bearer"))
  public async createGuardian(@Body() createUserGuardianDto: CreateUserGuardianDto, @UserEntity() user: IUser) {
    await this.userGuardianService.create({
      ...createUserGuardianDto,
      userId: user.userId,
    });
    return {iat: Date.now()};
  }

  @Put()
  @UseGuards(AuthGuard("bearer"))
  public async updateGuardian(@Body() updateUserGuardianDto: UpdateUserGuardianDto, @UserEntity() user: IUser) {
    const userGuardian = await this.userGuardianService.findOne({where: {userId: {[Op.eq]: user.userId}}});
    Object.keys(updateUserGuardianDto).forEach(key => userGuardian[key] = updateUserGuardianDto[key]);
    await userGuardian.save();
    return {iat: Date.now()};
  }
}
