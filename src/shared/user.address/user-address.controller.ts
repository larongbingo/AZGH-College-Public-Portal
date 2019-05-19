import { Controller, Post, Body, Put, UseGuards, Headers, Get, Request } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Op } from "sequelize";

import { UserService } from "../user/user.service";
import { UserEntity } from "../decorators/user-entity.decorator";
import { IUser } from "../interfaces/models/IUser";

import { CreateUserAddressDto } from "./dto/create-user-address.dto";
import { UpdateUserAddressDto } from "./dto/update-user-address.dto";
import { UserAddressService } from "./user-address.service";

@Controller("/user/address")
export class UserAddressController {
  constructor(
    private readonly userAddressService: UserAddressService,
  ) {}

    @Get()
    @UseGuards(AuthGuard("bearer"))
    public async getAddress(@UserEntity() user: IUser) {
      const userAddress = await this.userAddressService.findOne({where: {userId: {[Op.eq]: user.userId}}});
      return {
        streetNumber: userAddress.streetNumber,
        streetName: userAddress.streetName,
        subdivision: userAddress.subdivision,
        barangay: userAddress.barangay,
        city: userAddress.city,
        province: userAddress.province,
        zipCode: userAddress.zipCode,
      };
    }

  @Post()
  @UseGuards(AuthGuard("bearer"))
  public async createAddress(
    @Body() createUserAddressDto: CreateUserAddressDto,
    @UserEntity() user: IUser,
  ) {
    await this.userAddressService.create({
      ...createUserAddressDto,
      userId: user.userId,
    });

    return {iat: Date.now()};
  }

  @Put()
  @UseGuards(AuthGuard("bearer"))
  public async updateAddress(
    @Body() updateUserAddressDto: UpdateUserAddressDto,
    @UserEntity() user: IUser,
  ) {
      const userAddress = await this.userAddressService.findOne({where: {userId: {[Op.eq]: user.userId}}});

      Object.keys(updateUserAddressDto).forEach(key => userAddress[key] = updateUserAddressDto[key]);
      await userAddress.save();

      return {iat: Date.now()};
    }
}
