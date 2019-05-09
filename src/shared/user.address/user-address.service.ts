import { Injectable, Inject } from "@nestjs/common";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

import { UserAddress } from "../database/models/UserAddress.entity";

@Injectable()
export class UserAddressService {
  constructor(
    @Inject() private readonly userAddressRepository: typeof UserAddress,
  ) {}

  public async create(values: FilteredModelAttributes<UserAddress>, options?: ICreateOptions) {
    return this.userAddressRepository.create(values, options);
  }

  public async findOne(options?: IFindOptions<UserAddress>) {
    return this.userAddressRepository.findOne(options);
  }

  public async findAll(options?: IFindOptions<UserAddress>) {
    return this.userAddressRepository.findAll(options);
  }
}
