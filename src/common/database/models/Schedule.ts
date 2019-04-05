import { AllowNull, Column, DataType, ForeignKey, Model, PrimaryKey } from "sequelize-typescript";

import { ISchedule } from "../../interfaces/models/ISchedule";

import { User } from "./User";

export class Schedule extends Model<Schedule> implements ISchedule {
  // Model Columns

  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.STRING) 
  public scheduleCode: string;
  
  @ForeignKey(() => Subject)
  @AllowNull(false)
  @Column(DataType.STRING) 
  public subjectCode: string;

  // End Model Columns

  // Model Relationships



  // End Model Relationships

}
