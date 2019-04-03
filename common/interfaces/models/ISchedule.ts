
export interface ISchedule {
  scheduleCode: string;

  /**
   * A Foreign Key from Subject
   * @see {@link ISubject.ts}
   */
  subjectCode: string;

  /**
   * The primary instructor 
   * A Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  instructor: string;

  /**
   * The secondary instructor
   * A Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  assistantInstructor?: string;
}
