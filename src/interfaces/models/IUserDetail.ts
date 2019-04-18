
export interface IUserDetails {
  /**
   * Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  userId: string;

  firstName: string;
  middleName: string;
  lastName: string;
  suffix?: string;
  gender: string;
  civilStatus: string;
  citizenship: string;
  dateOfBirth: Date;
  birthPlace: string;
  religion: string;
}
