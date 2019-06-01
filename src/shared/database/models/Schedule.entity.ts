import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  BeforeCreate,
  BeforeUpdate,
} from "sequelize-typescript";
import { generate } from "randomstring";

import { ISchedule } from "../../interfaces/models/ISchedule";

import { Subject } from "./Subject.entity";
import { User } from "./User.entity";
import { Semester } from "./Semester.entity";

@Table({
  tableName: "schedules",
  paranoid: true,
})
export class Schedule extends Model<Schedule> implements ISchedule {
  // Class Methods

  @BeforeCreate
  @BeforeUpdate
  private static async generateId(instance: Schedule) {
    instance.scheduleCode = `${new Date().getFullYear()}${generate({charset: "alphanumeric", length: 15})}`
  }

  // End Class Methods

  // Model Columns

  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.STRING)
  public scheduleCode: string;

  @ForeignKey(() => Subject)
  @AllowNull(false)
  @Column(DataType.STRING)
  public subjectCode: string;

  @ForeignKey(() => Semester)
  @AllowNull(false)
  @Column(DataType.STRING)
  public semesterCode: string;

  // End Model Columns

  // Model Relationships

  @BelongsTo(() => Subject)
  public subject: Subject;

  @BelongsTo(() => Semester)
  public semester: Semester;

  // End Model Relationships
}
