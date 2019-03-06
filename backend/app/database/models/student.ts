import { compare, hash } from "bcrypt";
// tslint:disable-next-line:no-implicit-dependencies
import { generate } from "randomstring";
import { Op } from "sequelize";
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
    instance.studentId = `${new Date().getFullYear()}${generate({ charset: "numeric", length: 10 })}`;
  }

  @BeforeCreate
  private static async uniqueUsername(instance: Student) {
    let sameUsernameInstance = await this.findOne({where: {username: {[Op.eq]: instance.username}}});
    if(sameUsernameInstance) {
      throw new Error(`Provided username ${instance.username} is already taken`);
    }
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

  // Instance Methods

  public async checkPassword(plainText: string): Promise<boolean> {
    return compare(plainText, this.password);
  }
}
