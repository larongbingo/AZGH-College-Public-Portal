import { Controller, Post, Body, Put, UseGuards, Inject, Headers, Get, Param, UnprocessableEntityException } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Op } from "sequelize";

import { UserService } from "../user/user.service";

import { CreateUserAddressDto } from "./dto/create-user-address.dto";
import { UpdateUserAddressDto } from "./dto/update-user-address.dto";
import { UserAddressService } from "./user-address.service";

@Controller("/user/address")
export class UserAddressController {
  constructor(
    @Inject() private readonly userAddressService: UserAddressService,
    @Inject() private readonly userService: UserService,
  ) {}

    @Get("/:userId")
    @UseGuards(AuthGuard("bearer"))
    public async getAddress(@Headers("authorization") token: string, @Param("userId") userId: string) {
      const user = await this.userService.findOneByToken(token);
      if (user.userId !== userId) {
        throw new UnprocessableEntityException("The given id does not match with the token");
      }

      const userAddress = await this.userAddressService.findOne();
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
    @Headers("authorization") token: string,
  ) {
    const user = await this.userService.findOneByToken(token);

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
    @Headers("authorization") token: string,
  ) {
      const user = await this.userService.findOneByToken(token);
      const userAddress = await this.userAddressService.findOne({where: {userId: {[Op.eq]: user.userId}}});

      Object.keys(updateUserAddressDto).forEach(key => userAddress[key] = updateUserAddressDto[key]);
      await userAddress.save();

      return {iat: Date.now()};
    }
}
