import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IUserContacts } from "../../interfaces/models/IUserContacts";

import { User } from "./User";

@Table({
  tableName: "userContacts",
  paranoid: true,
})
export class UserContacts extends Model<UserContacts> implements IUserContacts {
  // Table Columns

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING)
  public userId: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public telephoneNumber?: string | undefined;

  @AllowNull(false)
  @Column(DataType.STRING)
  public mobileNumber: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public emailAddress: string;

  // End Table Columns

  // Model Relationships

  @BelongsTo(() => User)
  public user: User;

  // End Model Relationships

}
