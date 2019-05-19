import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

import { IProgram } from "../../interfaces/models/IProgram";

import { Curriculum } from "./Curriculum.entity";
import { Subject } from "./Subject.entity";
import { User } from "./User.entity";

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

  @AllowNull(true)
  @Column(DataType.STRING)
  public description: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  programTitle: string;

  // End Model Columns

  // Model Relationships

  @HasMany(() => User)
  public students: User[];

  @BelongsToMany(() => Subject, () => Curriculum)
  public subjects: Subject[];
  // End Model Relationships
}
