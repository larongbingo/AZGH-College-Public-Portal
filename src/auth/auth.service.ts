import { Injectable } from "@nestjs/common";
import { Op } from "sequelize";
import { compare } from "bcrypt";

import { UserService } from "../user/user.service";
import { User } from "../database/models/User.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
  ) {}

  public async validateUser(token: string): Promise<User> {
    return await this.userService.findOneByToken(token);
  }

  public async validateCredentials(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findOne({where: {username: {[Op.eq]: username}}});
    if (!user || !await compare(password, user.password)) {
      return null;
    }
    return user;
  }
}
