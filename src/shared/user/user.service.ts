import { Injectable, Inject } from "@nestjs/common";
import { Op } from "sequelize";
import { IFindOptions, ICreateOptions } from "sequelize-typescript";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

import { User } from "../database/models/User.entity";

import { USER_REPOSITORY } from "./user.provider";

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: typeof User,
  ) {}

  public async findOneByToken(token: string) {
    return this.userRepository.findOne({ where: { token: { [Op.eq]: token } } });
  }

  public async findOne(options?: IFindOptions<User>) {
    return this.userRepository.findOne(options);
  }

  public async findAll(options?: IFindOptions<User>) {
    return this.userRepository.findAll(options);
  }

  public async create(values: FilteredModelAttributes<User>, options?: ICreateOptions) {
    return this.userRepository.create(values, options);
  }
}
