export interface ISchedule {
  scheduleCode: string;

  /**
   * A Foreign Key from Subject
   * @see {@link ISubject.ts}
   */
  subjectCode: string;
}
