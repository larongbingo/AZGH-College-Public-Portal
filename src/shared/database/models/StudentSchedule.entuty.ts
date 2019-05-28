import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
  BeforeCreate,
  BeforeUpdate,
} from "sequelize-typescript";
import { Op } from "sequelize";
import { generate } from "randomstring";

import { IStudentSchedule } from "../../interfaces/models/IStudentSchedule";

import { Schedule } from "./Schedule.entity";
import { User } from "./User.entity";

@Table({
  tableName: "studentSchedules",
  paranoid: true,
})
export class StudentSchedule extends Model<StudentSchedule>
  implements IStudentSchedule {
  // Class Methods
  @BeforeCreate
  @BeforeUpdate
  private static async generateId(instance: StudentSchedule) {
    let studentSched;
    let id;

    do {
      id = generate({charset: "alphanumeric", length: 30});
      studentSched = await this.findOne({where: {studentScheduleId: {[Op.eq]: id}}});
    } while(studentSched);
    
    instance.studentScheduleId = id;
  }
  // End Class Methods

  // Model Columns
  @PrimaryKey
  @Column(DataType.STRING)
  public studentScheduleId: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING)
  public studentId: string;

  @ForeignKey(() => Schedule)
  @AllowNull(false)
  @Column(DataType.STRING)
  public scheduleCode: string;

  @AllowNull(true)
  @Column(DataType.STRING)
  public grade: string;
  // End Model Columns

  // Model Relationships
  @BelongsTo(() => User)
  public user: User;

  @BelongsTo(() => Schedule)
  public schedule: Schedule;
  // End Model Relationships
}
