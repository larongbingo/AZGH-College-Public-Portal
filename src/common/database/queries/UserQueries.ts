import { ICreateOptions, IFindOptions } from "sequelize-typescript";
// tslint:disable-next-line: no-submodule-imports
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

import { ICreate } from "../../interfaces/queries/ICreate";
import { IFindAll } from "../../interfaces/queries/IFindAll";
import { IFindOne } from "../../interfaces/queries/IFindOne";
import { User } from "../models/User";

export const USER_QUERIES = {
  create: Symbol.for("UserQueries.create"),
  findOne: Symbol.for("UserQueries.findOne"),
  findAll: Symbol.for("UserQueries.findAll")
};

export class UserQueries implements ICreate<User>, IFindOne<User>, IFindAll<User> {
  public async create(values?: FilteredModelAttributes<User>, options?: ICreateOptions): Promise<User> {
    return User.create(values, options);
  }  
  public async findOne(options?: IFindOptions<User> | undefined): Promise<User | null> {
    return User.findOne(options);
  }
  public async findAll(options?: IFindOptions<User> | undefined): Promise<User[]> {
    return User.findAll(options);
  }
}
