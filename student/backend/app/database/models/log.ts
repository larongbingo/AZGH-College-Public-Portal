import { Column, DataType, Default, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";

import { ILog } from "../../interfaces/models/ILog";

import { Student } from "./student";

@Table({
  tableName: "logs",
  paranoid: true
})
export class Log extends Model<Log> implements ILog {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  public id: string;

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
