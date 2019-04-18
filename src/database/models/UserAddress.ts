import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IUserAddress } from "../../interfaces/models/IUserAddress";

import { User } from "./User";

@Table({
  tableName: "userAddresses",
  paranoid: true,
})
export class UserAddress extends Model<UserAddress> implements IUserAddress {
  // Table Columns

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING)
  public userId: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public streetNumber?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public streetName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public subdivision: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public barangay: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public city: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public province: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public zipCode: string;

  // End Table Columns

  // Model Relationships

  @BelongsTo(() => User)
  public user: User;

  // End Model Relationships
}
