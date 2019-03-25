import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { Student } from "./student";

@Table({
  tableName: "studentContact",
  paranoid: true
})
export class StudentContact extends Model<StudentContact> {

  @Column(DataType.STRING)
  public phoneNumber?: string;

  @Column(DataType.STRING)
  public emailAddress: string;

  @Column(DataType.STRING)
  @ForeignKey(() => Student)
  public studentId: string;
}
