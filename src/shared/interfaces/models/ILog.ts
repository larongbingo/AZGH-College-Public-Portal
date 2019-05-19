export interface ILog {
  /**
   * The user that initiated the event
   * A Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  userId: string;

  /**
   * A short name of what happened
   */
  event: string;

  /**
   * A description of what happened
   */
  description: string;

  /**
   * The given parameters to make the event happen
   */
  reqParams?: string;

  /**
   * The response sent back to the request
   */
  res?: string;
}
