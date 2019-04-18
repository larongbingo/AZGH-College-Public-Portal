import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IUserDetails } from "../../interfaces/models/IUserDetail";

import { User } from "./User";

@Table({
  tableName: "userDetails",
  paranoid: true,
})
export class UserDetails extends Model<UserDetails> implements IUserDetails {
  // Table Columns

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING)
  public userId: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public firstName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public middleName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public lastName: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public suffix?: string | undefined;

  @AllowNull(false)
  @Column(DataType.STRING)
  public gender: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public civilStatus: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public citizenship: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public dateOfBirth: Date;

  @AllowNull(false)
  @Column(DataType.STRING)
  public birthPlace: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public religion: string;

  // End Table Columns

  // Model Relationships

  @BelongsTo(() => User)
  public user: User;

  // End Model Relationships
}
