export interface IAssignedInstructors {
  /**
   * Foreign Key from User
   * @see {@link IUser.ts}
   */
  userId: string;

  /**
   * Foreign Key from Schedule
   * @see {@link ISchedule.ts}
   */
  scheduleCode: string;
}
