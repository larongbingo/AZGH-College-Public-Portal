import { compare, hash } from "bcrypt";
// tslint:disable-next-line:no-implicit-dependencies
import { generate } from "randomstring";
import { BeforeCreate, BeforeUpdate, BelongsTo, Column, CreatedAt, DataType,
  ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";

import { Guardian } from "./guardian";
import { Program } from "./program";
import { StudentContact } from "./student.contact";
import { StudentDetails } from "./student.details";

@Table({
  tableName: "students",
  paranoid: true
})
export class Student extends Model<Student> {
  @BeforeCreate
  private static generateID(instance: Student) {
    instance.id = `${new Date().getFullYear()}${generate({ charset: "numeric", length: 10 })}`;
  }

  @BeforeUpdate
  @BeforeCreate
  private static async hashPassword(instance: Student) {
    instance.password = await hash(instance.password, 12);
  }

  @PrimaryKey
  @Column(DataType.STRING)
  public studentId: string;

  @Column(DataType.STRING)
  public username: string;

  @Column(DataType.STRING)
  public password: string;

  @Column(DataType.STRING)
  public userStatus: string;

  @CreatedAt
  @Column(DataType.DATE)
  public dateRegistered: Date;

  @ForeignKey(() => Program)
  @Column(DataType.STRING)
  public programEnrolled: string;

  @Column(DataType.BOOLEAN)
  public isEnrolled: boolean;

  // Model Relationships

  @HasMany(() => Guardian)
  public guardians: Guardian[];

  @HasOne(() => StudentDetails)
  public details: StudentDetails;

  @HasOne(() => StudentContact)
  public contact: StudentContact;

  @BelongsTo(() => Program)
  public enrolledProgram: Program;

  public async checkPassword(plainText: string): Promise<boolean> {
    return compare(plainText, this.password);
  }
}