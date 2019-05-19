
export class UpdateUserPreviousSchooolDto {
  public readonly schoolType?: "High School" | "Junior High" | "Senior High" | "SPED & Others" | "College";
  public readonly schoolName?: string;
  public readonly program?: string;
  public readonly dateOfGraduation?: Date;
  public readonly schoolYear?: string;
  public readonly yearOrGrade?: "4th Year" | "Grade 10" | "Grade 11" | "Grade 12" | "1st Year College" |
    "2nd Year College" | "3rd Year College" | "4th Year College";
  public readonly term?: "1st" | "2nd";
}
