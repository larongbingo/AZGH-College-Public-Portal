import { Controller, Get, Post, Put, UseGuards, Body, Inject } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Op } from "sequelize";

import { UserEntity } from "../decorators/user-entity.decorator";
import { IUser } from "../interfaces/models/IUser";

import { UserContactsService } from "./user-contacts.service";
import { CreateUserContactsDto } from "./dto/create-user-contacts.dto";
import { UpdateUserContactsDto } from "./dto/update-user-contacts.dto";

@Controller("/user/contacts")
export class UserContactsController {
  constructor(
    private readonly userContactsService: UserContactsService,
  ) {}

  @Get()
  @UseGuards(AuthGuard("bearer"))
  public async getContacts(@UserEntity() user: IUser) {
    const userContacts = await this.userContactsService.findOne({where: {userId: {[Op.eq]: user.userId}}});

    return {
      telephoneNumber: userContacts.telephoneNumber,
      mobileNumber: userContacts.mobileNumber,
      emailAddress: userContacts.emailAddress,
    };
  }

  @Post()
  @UseGuards(AuthGuard("bearer"))
  public async createContacts(
    @Body() createUserContactsDto: CreateUserContactsDto,
    @UserEntity() user: IUser,
  ) {
    await this.userContactsService.create({...createUserContactsDto, userId: user.userId});
    return {iat: Date.now()};
  }

  @Put()
  @UseGuards(AuthGuard("bearer"))
  public async updateContacts(
    @Body() updateUserContactsDto: UpdateUserContactsDto,
    @UserEntity() user: IUser,
  ) {
    const userContacts = await this.userContactsService.findOne({where: {userId: {[Op.eq]: user.userId}}});

    Object.keys(updateUserContactsDto).forEach(key => userContacts[key] = updateUserContactsDto[key]);
    await userContacts.save();

    return {iat: Date.now()};
  }
}
