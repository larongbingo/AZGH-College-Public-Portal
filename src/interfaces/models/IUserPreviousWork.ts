/**
 * Represents the previous job experience of the User
 */
export interface IUserPreviousWork {
  /**
   * A Foreign Key from User
   * @see {@link IUser.ts}
   */
  userId: string;

  /**
   * Title of the work
   */
  previousJobTitle: string;

  /**
   * Name of the Company
   */
  previousCompany: string;

  /**
   * Describe previous job
   */
  jobDescription: string;

  /**
   * Starting Date you began working
   */
  startingDate: Date;

  /**
   * Ending Date you left work
   */
  endingDate: Date;
}
