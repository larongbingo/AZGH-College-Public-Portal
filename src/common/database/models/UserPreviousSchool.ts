import { AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

import { IUserPreviousSchool } from "../..//interfaces/models/IUserPreviousSchool";

import { User } from "./User";

@Table({
  tableName: "userPreviousSchool",
  paranoid: true
})
export class UserPreviousSchool extends Model<UserPreviousSchool> implements IUserPreviousSchool {

  // Table Columns

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column(DataType.STRING) 
  public userId: string;  
  
  @AllowNull(false)
  @Column(DataType.STRING) 
  public schoolType: "High School" | "Junior High" | "Senior High" | "SPED & Others" | "College";
  
  @AllowNull(false)
  @Column(DataType.STRING) 
  public schoolName: string;
  
  @AllowNull(true)
  @Column(DataType.STRING) 
  public program?: string | undefined;
  
  @AllowNull(true)
  @Column(DataType.STRING) 
  public dateOfGraduation?: Date | undefined;
  
  @AllowNull(false)
  @Column(DataType.STRING) 
  public schoolYear: string;
  
  @AllowNull(false)
  @Column(DataType.STRING) 
  public yearOrGrade: "4th Year" | "Grade 10" | "Grade 11" | "Grade 12" | "1st Year College" | 
  "2nd Year College" | "3rd Year College" | "4th Year College";
  
  @AllowNull(false)
  @Column(DataType.STRING) 
  public term: "1st" | "2nd";

  // End Table Columns

  // Model Relationships

  @BelongsTo(() => User)
  public user: User;

  // End Model Relationships

}
