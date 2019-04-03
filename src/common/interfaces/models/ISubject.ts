
export interface ISubject {
  /**
   * A Foreign Key from Program
   * @see {@link ./IProgram.ts}
   */
  programCode: string;

  subjectCode: string;
  title: string;
  description: string;
}
