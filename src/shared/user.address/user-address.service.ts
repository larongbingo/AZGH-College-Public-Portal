import { Injectable, Inject, BadRequestException } from "@nestjs/common";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

import { UserAddress } from "../database/models/UserAddress.entity";

import { USER_ADDRESS_PROVIDER } from "./user-address.provider";

@Injectable()
export class UserAddressService {
  constructor(
    @Inject(USER_ADDRESS_PROVIDER) private readonly userAddressRepository: typeof UserAddress,
  ) {}

  public async create(values: FilteredModelAttributes<UserAddress>, options?: ICreateOptions) {
    return this.userAddressRepository.create(values, options);
  }

  public async findOne(options: IFindOptions<UserAddress>) {
    const userAddress = await this.userAddressRepository.findOne(options);
    if (!userAddress) {
      throw new BadRequestException("User does not have a UserAddress yet, create a UserAddress first");
    }
    return userAddress;
  }

  public async findAll(options: IFindOptions<UserAddress>) {
    const userAddress = await this.userAddressRepository.findAll(options);
    return userAddress;
  }
}
