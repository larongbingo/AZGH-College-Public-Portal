import { AllowNull, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";

import { IUserGuardian } from "../../interfaces/models/IUserGuardian";

import { User } from "./User";

@Table({
  tableName: "userGuardians",
  paranoid: true
})
export class UserGuardian extends Model<UserGuardian> implements IUserGuardian {
  // Table Columns

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING)
  public userId: string;
  
  @AllowNull(false)
  @Column(DataType.STRING)
  public firstName: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public middleName?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public lastName: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public mobileNumber: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public emailAddress: string;
  
  @AllowNull(false)
  @Column(DataType.STRING)
  public occupation: string;

  // End Table Columns

  // Model Relationships

  @HasOne(() => User)
  public user: User;

  // End Model Relationships

}
