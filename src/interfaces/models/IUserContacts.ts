export interface IUserContacts {
  /**
   * Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  userId: string;

  telephoneNumber?: string;
  mobileNumber: string;
  emailAddress: string;
}
