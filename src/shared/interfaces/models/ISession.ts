export interface ISession {
  /**
   * A Foreign Key from Schedule
   * @see {@link ./ISchedule.ts}
   */
  scheduleCode: string;

  /**
   * A Foreign Key from Room
   * @see {@link ./IRoom.ts}
   */
  roomCode: string;

  startingTime: string;
  endingTime: string;
  sessionType: "Lecture" | "Laboratory";
}
