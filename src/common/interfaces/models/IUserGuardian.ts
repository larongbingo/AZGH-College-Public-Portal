
export interface IUserGuardian {
  /**
   * Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  userId: string;
  
  firstName?: string;
  middleName: string;
  lastName?: string;
  mobileNumber: string;
  emailAddress: string;
  occupation: string;
}
