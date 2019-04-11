import { injectable } from "inversify";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";
// tslint:disable-next-line: no-submodule-imports
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

import { ICreate } from "../../interfaces/queries/ICreate";
import { IFindAll } from "../../interfaces/queries/IFindAll";
import { IFindOne } from "../../interfaces/queries/IFindOne";
import { Log } from "../models/Log";

export const LOG_QUERIES = {
  create:  Symbol.for("LogQueries.create"),
  findAll: Symbol.for("LogQueries.findAll"),
  findOne: Symbol.for("LogQueries.findOne")
};

@injectable()
export class LogQueries implements ICreate<Log>, IFindAll<Log>, IFindOne<Log> {
  public async create(values?: FilteredModelAttributes<Log> | undefined, options?: ICreateOptions): Promise<Log> {
    return Log.create(values, options);
  }
  
  public async findAll(options?: IFindOptions<Log> | undefined): Promise<Log[]> {
    return Log.findAll(options);
  }

  public async findOne(options?: IFindOptions<Log> | undefined): Promise<Log | null> {
    return Log.findOne(options);
  }
}
