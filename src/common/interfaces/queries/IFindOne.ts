import { IFindOptions, Model } from "sequelize-typescript";

export interface IFindOne<T extends Model<T>> {
  findOne(options?: IFindOptions<T>): Promise<T | null>;
}
