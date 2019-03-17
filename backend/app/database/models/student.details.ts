import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { Student } from "./student";

@Table({
  tableName: "studentDetails",
  paranoid: true
})
export class StudentDetails extends Model<StudentDetails> {
  @Column(DataType.STRING)
  @ForeignKey(() => Student)
  public studentId: string;

  @Column(DataType.STRING)
  public lrn: string;

  @Column(DataType.STRING)
  public firstName: string;

  @Column(DataType.STRING)
  public lastName: string;

  @Column(DataType.STRING)
  public midddleName: string;

  @Column(DataType.STRING)
  public suffix: string;

  @Column(DataType.STRING)
  public gender: string;

  @Column(DataType.STRING)
  public status: string;

  @Column(DataType.STRING)
  public citizenship: string;

  @Column(DataType.STRING)
  public birthPlace: string;

  @Column(DataType.STRING)
  public birthDate: Date;
}
