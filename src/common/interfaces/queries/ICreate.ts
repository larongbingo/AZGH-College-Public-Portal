import { ICreateOptions, Model  } from "sequelize-typescript";
// tslint:disable-next-line: no-submodule-imports
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";

export interface ICreate<T extends Model<T>> {
  create(values?: FilteredModelAttributes<T>, options?: ICreateOptions): Promise<T>;
}
