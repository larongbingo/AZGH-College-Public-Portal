import { Controller, Delete, Post, Put, Inject, Body, UnprocessableEntityException, UseGuards } from "@nestjs/common";
import { Op } from "sequelize";
import { AuthGuard } from "@nestjs/passport";

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
  public async updateUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.findOneUser(createUserDto.userId);
    Object.keys(createUserDto).forEach((key) => {
      if (key !== "userId") {
        user[key] = createUserDto[key];
      }
    });
    await user.save();
    return {iat: Date.now()};
  }

  @Delete()
  @UseGuards(AuthGuard("bearer"))
  public async deleteUser(@Body() createUserDto: CreateUserDto) {
    const user = await this.findOneUser(createUserDto.userId);
    await user.destroy();
    return {iat: Date.now()};
  }

  private async findOneUser(id: string) {
    const user = await this.userService.findOne({where: {id: {[Op.eq]: id}}});
    if (!user) {
      throw new UnprocessableEntityException("User does not exist");
    }
    return user;
  }
}
