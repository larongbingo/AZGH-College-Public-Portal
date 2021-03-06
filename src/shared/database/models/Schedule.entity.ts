import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

import { ISchedule } from "../../interfaces/models/ISchedule";

import { Subject } from "./Subject.entity";
import { User } from "./User.entity";

@Table({
  tableName: "schedules",
  paranoid: true,
})
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

  @BelongsTo(() => Subject)
  public subject: Subject;

  // End Model Relationships
}
