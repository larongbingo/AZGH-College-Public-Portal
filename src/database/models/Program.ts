import { AllowNull, BelongsToMany, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";

import { IProgram } from "../../interfaces/models/IProgram";

import { Curriculum } from "./Curriculum";
import { Subject } from "./Subject";
import { User } from "./User";

@Table({
  tableName: "programs",
  paranoid: true,
})
export class Program extends Model<Program> implements IProgram {

  // Model Columns

  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.STRING)
  public programCode: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public description: string;

  // End Model Columns

  // Model Relationships

  @HasMany(() => User)
  public students: User[];

  @BelongsToMany(() => Subject, () => Curriculum)
  public subjects: Subject[];
  // End Model Relationships

}
