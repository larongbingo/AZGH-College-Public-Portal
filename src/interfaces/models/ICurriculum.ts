
export interface ICurriculum {
  /**
   * Foreign Key from Program
   * @see {@link IProgram.ts}
   */
  programCode: string;

  /**
   * Foreign Key from Subject
   * @see {@link ISubject.ts}
   */
  subjectCode: string;
}
