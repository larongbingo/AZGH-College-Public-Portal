import { Controller, Delete, Post, Put, Inject, Body, UnprocessableEntityException, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

import { UserEntity } from "../decorators/user-entity.decorator";
import { User } from "../database/models/User.entity";

import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("/user")
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}

  @Post()
  public async createUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.userService.create(createUserDto);
    return {id: user.id, iat: Date.now()};
  }

  @Put()
  @UseGuards(AuthGuard("bearer"))
  public async updateUser(@Body() createUserDto: CreateUserDto, @UserEntity() user: User) {
    Object.keys(createUserDto).forEach((key) => user[key] = createUserDto[key]);
    await user.save();
    return {iat: Date.now()};
  }

  @Delete()
  @UseGuards(AuthGuard("bearer"))
  public async deleteUser(@UserEntity() user: User) {
    await user.destroy();
    return {iat: Date.now()};
  }
}
