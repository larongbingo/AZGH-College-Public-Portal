import { compare, hash } from "bcrypt";
import { generate } from "randomstring";
import { Op } from "sequelize";
import { AllowNull, BeforeCreate, BeforeUpdate, BelongsTo,
  Column, DataType, ForeignKey, HasMany, HasOne, Model, PrimaryKey, Table } from "sequelize-typescript";

import { IUser, UserType } from "../../interfaces/models/IUser";

import { Log } from "./Log";
import { Program } from "./Program";
import { UserAddress } from "./UserAddress";
import { UserContacts } from "./UserContacts";
import { UserDetails } from "./UserDetails";
import { UserGuardian } from "./UserGuardian";
import { UserPreviousSchool } from "./UserPreviousSchool";
import { UserPreviousWork } from "./UserPreviousWork";

@Table({
  tableName: "users",
  paranoid: true,
})
export class User extends Model<User> implements IUser {
  // Class Methods

  @BeforeCreate
  private static async generateUniqueID(instance: User) {
    let user;
    let id;

    do {
      id = `${new Date().getFullYear()}${generate({charset: "numeric", length: 10})}`;
      user = await User.findOne({where: { userId: {[Op.eq]: id} }});
      if (!user) {
        instance.userId = id;
      }
    }
    while (!!user);
  }

  @BeforeCreate
  private static async checkUsername(instance: User) {
    if (await this.findOne({where: { username: {[Op.eq]: instance.username} }})) {
      throw new Error(`Username ${instance.username} is already taken`);
    }
  }

  @BeforeUpdate
  @BeforeCreate
  private static async hashPassword(instance: User) {
    // @ts-ignore
    if (instance.password !== instance._previousDataValues.password) {
      instance.password = await hash(instance.password, 12);
    }
  }

  // End Class Methods

  // Database Columns

  @ForeignKey(() => Program)
  @AllowNull(false)
  @Column(DataType.STRING)
  public enrolledProgram?: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public username: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public password: string;

  @PrimaryKey
  @Column(DataType.STRING)
  public userId: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  public type: UserType;

  // End Database Columns

  // Model Relationships

  @HasOne(() => UserAddress)
  public address: UserAddress;

  @HasOne(() => UserContacts)
  public contacts: UserContacts;

  @HasOne(() => UserDetails)
  public details: UserDetails;

  @HasOne(() => UserGuardian)
  public guardian: UserGuardian;

  @HasOne(() => UserPreviousSchool)
  public previousSchool: UserPreviousSchool;

  @HasMany(() => Log)
  public logs: Log[];

  @BelongsTo(() => Program)
  public program: Program;

  @HasOne(() => UserPreviousWork)
  public previousWork: UserPreviousWork;

  // End Model Relationships

  // Instance Methods

  public async checkPassword(plainText: string) {
    return compare(plainText, this.password);
  }

  // End Instance Methods
}
