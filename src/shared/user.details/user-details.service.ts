import { Injectable, Inject } from "@nestjs/common";
import { IFindOptions, ICreateOptions } from "sequelize-typescript";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

import { UserDetails } from "../database/models/UserDetails.entity";

import { USER_DETAILS_REPOSITORY } from "./user-details.provider";

@Injectable()
export class UserDetailsService {
  constructor(
    @Inject(USER_DETAILS_REPOSITORY) private readonly userDetailsRepository: typeof UserDetails,
  ) {}

  public async findOne(options?: IFindOptions<UserDetails>) {
    return this.userDetailsRepository.findOne(options);
  }

  public async findAll(options?: IFindOptions<UserDetails>) {
    return this.userDetailsRepository.findAll(options);
  }

  public async create(values: FilteredModelAttributes<UserDetails>, options?: ICreateOptions) {
    return this.userDetailsRepository.create(values, options);
  }
}
