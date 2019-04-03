
export interface IUser {

  /**
   * Identifier of the account when logging in
   * This is unique to each account
   */
  username: string;

  /**
   * A secret of the account
   */
  password: string;

  /**
   * Unique Identifier of the account
   */
  userId: string;

  /**
   * Refers to the level of access
   */
  type: "Student" | "Professor" | "Admin";
}
