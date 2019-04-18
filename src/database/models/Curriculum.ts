import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { ICurriculum } from "../../interfaces/models/ICurriculum";

import { Program } from "./Program";
import { Subject } from "./Subject";

@Table({
  tableName: "curriculum",
  paranoid: true,
})
export class Curriculum extends Model<Curriculum> implements ICurriculum {
  // Model Columns

  @ForeignKey(() => Program)
  @AllowNull(false)
  @Column(DataType.STRING)
  public programCode: string;

  @ForeignKey(() => Subject)
  @AllowNull(false)
  @Column(DataType.STRING)
  public subjectCode: string;

  // End Model Columns

  // Model Relationships

  @BelongsTo(() => Program)
  public program: Program;

  @BelongsTo(() => Subject)
  public subject: Subject;

  // End Model Relationships

}
