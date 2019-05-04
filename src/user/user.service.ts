import { Injectable } from "@nestjs/common";
import { Op } from "sequelize";
import { IFindOptions } from "sequelize-typescript";

import { User } from "../database/models/User.entity";

@Injectable()
export class UserService {
  public async findOneByToken(token: string) {
    return User.findOne({ where: { token: { [Op.eq]: token } } });
  }

  public async findOne(options?: IFindOptions<User>) {
    return User.findOne(options);
  }
}
