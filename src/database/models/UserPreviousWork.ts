import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IUserPreviousWork } from "../../interfaces/models/IUserPreviousWork";

import { User } from "./User";

@Table({
  tableName: "usersPreviousWork",
  paranoid: true
})
export class UserPreviousWork extends Model<UserPreviousWork> implements IUserPreviousWork {
  // Model Columns
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING) 
  public userId: string; 

  @AllowNull(false)
  @Column(DataType.STRING) 
  public previousJobTitle: string;

  @AllowNull(false)
  @Column(DataType.STRING) 
  public previousCompany: string;

  @AllowNull(false)
  @Column(DataType.STRING) 
  public jobDescription: string;

  @AllowNull(false)
  @Column(DataType.DATE) 
  public startingDate: Date;

  @AllowNull(false)
  @Column(DataType.DATE) 
  public endingDate: Date;
  // End Model Columns

  // Model Relationships
  @BelongsTo(() => User)
  public user: User;
  // End Model Relationships
}
