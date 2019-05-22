import {
  AllowNull,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  HasMany,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

import { ISubject } from "../../interfaces/models/ISubject";

import { Curriculum } from "./Curriculum.entity";
import { Program } from "./Program.entity";
import { Schedule } from "./Schedule.entity";

@Table({
  tableName: "subjects",
  paranoid: true,
})
export class Subject extends Model<Subject> implements ISubject {
  // Model Columns

  @ForeignKey(() => Program)
  @AllowNull(false)
  @Column(DataType.STRING)
  public programCode: string;

  @PrimaryKey
  @AllowNull(false)
  @Column(DataType.STRING)
  public subjectCode: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public title: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public description: string;

  // End Model Columns

  // Model Relationships

  @BelongsToMany(() => Program, () => Curriculum)
  public programs: Program[];

  @HasMany(() => Schedule)
  public schedule: Schedule[];

  // End Model Relationships
}
