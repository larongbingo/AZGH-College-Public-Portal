import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { Student } from "./student";

@Table({
  tableName: "studentSchoolBackground",
  paranoid: true
})
export class StudentSchoolBackground extends Model<StudentSchoolBackground> {
  @ForeignKey(() => Student)
  @Column(DataType.STRING)
  public studentId: string;

  @Column(DataType.STRING)
  public elementarySchool: string;

  @Column(DataType.DATE)
  public elementaryGrad: Date;

  @Column(DataType.STRING)
  public juniorHighSchool: string;

  @Column(DataType.DATE)
  public juniorHighGrad: Date;

  @Column(DataType.STRING)
  public seniorHighSchool?: string;

  @Column(DataType.DATE)
  public seniorHighGrad?: Date;
}
