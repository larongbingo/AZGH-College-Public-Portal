import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";

import { ISemester } from "../../interfaces/models/ISemester";

import { Schedule } from "./Schedule";

@Table({
  tableName: "semesters",
  paranoid: true
})
export class Semester extends Model<Semester> implements ISemester {
  // Model Columns

  @Column(DataType.STRING)
  public semsterCode: string;  
  
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
