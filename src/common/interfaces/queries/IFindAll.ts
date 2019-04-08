import { IFindOptions, Model } from "sequelize-typescript";

export interface IFindAll<T extends Model<T>> {
  findAll(options?: IFindOptions<T>): Promise<T[]>;
}
