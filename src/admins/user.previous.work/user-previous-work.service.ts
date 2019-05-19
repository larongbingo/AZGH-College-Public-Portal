import { Injectable, Inject } from "@nestjs/common";

import { UserPreviousWork } from "../../shared/database/models/UserPreviousWork.entity";

import { USER_PREVIOUS_WORK_REPOSITORY } from "./user-previous-work.provider";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

@Injectable()
export class UserPreviousWorkService {
  constructor(
    @Inject(USER_PREVIOUS_WORK_REPOSITORY) private readonly userPreviousWorkRepository: typeof UserPreviousWork,
  ) {}

  public async create(values: FilteredModelAttributes<UserPreviousWork>, options?: ICreateOptions) {
    return this.userPreviousWorkRepository.create(values, options);
  }

  public async findOne(options?: IFindOptions<UserPreviousWork>) {
    return this.userPreviousWorkRepository.findOne(options);
  }

  public async findAll(options?: IFindOptions<UserPreviousWork>) {
    return this.userPreviousWorkRepository.findAll(options);
  }
}
