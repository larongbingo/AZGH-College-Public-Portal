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

  @Column(DataType.STRING)
  public elementaryGrad: string;

  @Column(DataType.STRING)
  public juniorHighSchool: string;

  @Column(DataType.STRING)
  public juniorHighGrad: string;

  @Column(DataType.STRING)
  public seniorHighSchool?: string;

  @Column(DataType.STRING)
  public seniorHighGrad?: string;
}
