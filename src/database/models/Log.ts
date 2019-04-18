import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { ILog } from "../../interfaces/models/ILog";

import { User } from "./User";

@Table({
  tableName: "logs",
  paranoid: true
})
export class Log extends Model<Log> implements ILog {
  // Model Columns

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING) 
  public userId: string;
  
  @AllowNull(false)
  @Column(DataType.STRING) 
  public event: string;

  @AllowNull(false)
  @Column(DataType.STRING) 
  public description: string;

  @AllowNull(true)
  @Column(DataType.STRING) 
  public reqParams?: string | undefined;
  
  @AllowNull(true)
  @Column(DataType.STRING) 
  public res?: string | undefined;

  // End Model Columns

  // Model Relationships

  @BelongsTo(() => User)
  public user: User;

  // End Model Relationships
}
