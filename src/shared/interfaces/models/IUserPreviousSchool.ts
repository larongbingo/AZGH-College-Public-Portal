export interface IUserPreviousSchool {
  /**
   * Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  userId: string;

  schoolType:
    | "High School"
    | "Junior High"
    | "Senior High"
    | "SPED & Others"
    | "College";
  schoolName: string;
  program?: string;
  dateOfGraduation?: Date;
  schoolYear: string;
  yearOrGrade:
    | "4th Year"
    | "Grade 10"
    | "Grade 11"
    | "Grade 12"
    | "1st Year College"
    | "2nd Year College"
    | "3rd Year College"
    | "4th Year College";
  term: "1st" | "2nd";
}
