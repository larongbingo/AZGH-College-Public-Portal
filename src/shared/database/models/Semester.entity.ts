import { Column, DataType, HasMany, Model, Table, PrimaryKey } from "sequelize-typescript";

import { ISemester } from "../../interfaces/models/ISemester";

import { Schedule } from "./Schedule.entity";

@Table({
  tableName: "semesters",
  paranoid: true,
})
export class Semester extends Model<Semester> implements ISemester {
  // Model Columns

  @PrimaryKey
  @Column(DataType.STRING)
  public semesterCode: string;

  @Column(DataType.STRING)
  public startingDate: Date;

  @Column(DataType.STRING)
  public endingDate: Date;

  // End Model Columns

  // Model Relationships

  @HasMany(() => Schedule)
  public schedules: Schedule[];

  // End Model Relationships
}
