import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { Student } from "./student";

@Table({
  tableName: "logs",
  paranoid: true
})
export class Log extends Model<Log> {
  @Column(DataType.STRING)
  public event: string;

  @Column(DataType.STRING)
  public description: string;

  @ForeignKey(() => Student)
  @Column(DataType.STRING)
  public studentId?: string;

  @Column(DataType.STRING)
  public params?: string;
}
