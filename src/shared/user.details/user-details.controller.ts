import { Controller, Get, Post, Put, UseGuards, Body } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Op } from "sequelize";
import { UserEntity } from "../decorators/user-entity.decorator";
import { IUser } from "../interfaces/models/IUser";
import { UserDetailsService } from "./user-details.service";
import { CreateUserDetailsDto } from "./dto/create-user-details.dto";
import { UpdateUserDetailsDto } from "./dto/update-user-details.dto";

@Controller("/user/details")
export class UserDetailsController {
  constructor(
    private readonly userDetailsService: UserDetailsService,
  ) {}

  @Get()
  @UseGuards(AuthGuard("bearer"))
  public async getDetails(@UserEntity() user: IUser) {
    const userDetails = await this.userDetailsService.findOne({where: {userId: {[Op.eq]: user.userId}}});
    return {
      firstName: userDetails.firstName,
      middleName: userDetails.middleName,
      lastName: userDetails.lastName,
      suffix: userDetails.suffix,
      gender: userDetails.gender,
      civilStatus: userDetails.civilStatus,
      citizenship: userDetails.citizenship,
      dateOfBirth: userDetails.dateOfBirth,
      birthPlace: userDetails.birthPlace,
      religion: userDetails.religion,
    };
  }

  @Post()
  @UseGuards(AuthGuard("bearer"))
  public async createDetails(@Body() createUserDetailsDto: CreateUserDetailsDto, @UserEntity() user: IUser) {
    await this.userDetailsService.create({
      ...createUserDetailsDto,
      userId: user.userId,
    });
    return {iat: Date.now()};
  }

  @Put()
  @UseGuards(AuthGuard("bearer"))
  public async updateDetails(@Body() updateUserDetailsDto: UpdateUserDetailsDto, @UserEntity() user: IUser) {
    const userDetails = await this.userDetailsService.findOne({where: {userId: {[Op.eq]: user.userId}}});
    Object.keys(updateUserDetailsDto).forEach(key => userDetails[key] = updateUserDetailsDto[key]);
    await userDetails.save();
    return {iat: Date.now()};
  }
}
