import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { Student } from "./student";

@Table({
  tableName: "guardians",
  paranoid: true
})
export class Guardian extends Model<Guardian> {
  @ForeignKey(() => Student)
  @Column(DataType.STRING)
  public studentId: string;

  @Column(DataType.STRING)
  public relationship: string;

  @Column(DataType.STRING)
  public firstName: string;

  @Column(DataType.STRING)
  public lastName: string;

  @Column(DataType.STRING)
  public middleName: string;

  @Column(DataType.STRING)
  public phoneNumber: string;

  @Column(DataType.STRING)
  public emailAddress: string;

  @Column(DataType.STRING)
  public occupation: string;
}
