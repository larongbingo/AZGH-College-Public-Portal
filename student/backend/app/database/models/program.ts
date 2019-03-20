import { Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
  tableName: "programs",
  paranoid: true
})
export class Program extends Model<Program> {
  @Column(DataType.STRING)
  public title: string;

  @PrimaryKey
  @Column(DataType.STRING)
  public code: string;

  @Column(DataType.STRING)
  public description: string;
}
