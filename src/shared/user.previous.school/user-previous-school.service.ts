import { Injectable, Inject } from "@nestjs/common";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

import { UserPreviousSchool } from "../database/models/UserPreviousSchool.entity";

import { USER_PREVIOUS_SCHOOL_REPOSITORY } from "./user-previous-school.provider";

@Injectable()
export class UserPreviousSchoolService {
  constructor(
    @Inject(USER_PREVIOUS_SCHOOL_REPOSITORY) private readonly userPreviousSchoolRepository: typeof UserPreviousSchool,
  ) {}

  public async create(values: FilteredModelAttributes<UserPreviousSchool>, options?: ICreateOptions) {
    return this.userPreviousSchoolRepository.create(values, options);
  }

  public async findOne(options?: IFindOptions<UserPreviousSchool>) {
    return this.userPreviousSchoolRepository.findOne(options);
  }

  public async findAll(options?: IFindOptions<UserPreviousSchool>) {
    return this.userPreviousSchoolRepository.findAll(options);
  }
}
