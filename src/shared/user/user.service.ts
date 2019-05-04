import { Injectable } from "@nestjs/common";
import { Op } from "sequelize";
import { IFindOptions, ICreateOptions } from "sequelize-typescript";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

import { User } from "../database/models/User.entity";

@Injectable()
export class UserService {
  public async findOneByToken(token: string) {
    return User.findOne({ where: { token: { [Op.eq]: token } } });
  }

  public async findOne(options?: IFindOptions<User>) {
    return User.findOne(options);
  }

  public async findAll(options?: IFindOptions<User>) {
    return User.findAll(options);
  }

  public async create(values: FilteredModelAttributes<User>, options?: ICreateOptions) {
    return User.create(values, options);
  }
}
