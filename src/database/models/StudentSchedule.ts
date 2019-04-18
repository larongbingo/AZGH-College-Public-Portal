import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IStudentSchedule } from "../../interfaces/models/IStudentSchedule";

import { Schedule } from "./Schedule";
import { User } from "./User";

@Table({
  tableName: "studentSchedules",
  paranoid: true,
})
export class StudentSchedule extends Model<StudentSchedule> implements IStudentSchedule {

  // Model Columns
  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING)
  public studentId: string;

  @ForeignKey(() => Schedule)
  @AllowNull(false)
  @Column(DataType.STRING)
  public scheduleCode: string;
  // End Model Columns

  // Model Relationships
  @BelongsTo(() => User)
  public user: User;

  @BelongsTo(() => Schedule)
  public schedule: Schedule;
  // End Model Relationships

}
