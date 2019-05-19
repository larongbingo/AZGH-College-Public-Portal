export interface IStudentSchedule {
  /**
   * The id of the student
   * A Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  studentId: string;

  /**
   * The id of the schedule that the student is enrolled in
   * A Foreign Key from Schedule
   * @see {@link ./ISchedule.ts}
   */
  scheduleCode: string;
}
