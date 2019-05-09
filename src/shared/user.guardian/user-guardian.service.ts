import { Injectable, Inject } from "@nestjs/common";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

import { UserGuardian } from "../database/models/UserGuardian.entity";

import { USER_GUARDIAN_REPOSITORY } from "./user-guardian.provider";

@Injectable()
export class UserGuardianService {
  constructor(
    @Inject(USER_GUARDIAN_REPOSITORY) private readonly userGuardianRepository: typeof UserGuardian,
  ) {}

  public async create(values: FilteredModelAttributes<UserGuardian>, options?: ICreateOptions) {
    return this.userGuardianRepository.create(values, options);
  }

  public async findOne(options?: IFindOptions<UserGuardian>) {
    return this.userGuardianRepository.findOne(options);
  }

  public async findAll(options?: IFindOptions<UserGuardian>) {
    return this.userGuardianRepository.findAll(options);
  }
}
