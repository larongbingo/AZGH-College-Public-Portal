
export interface IUserAddress {
  /**
   * Foreign Key from User
   * @see {@link ./IUser.ts}
   */
  userId: string;
  type: "current" | "permanent";
  streetNumber: string;
  streetName: string;
  subdivision: string;
  barangay: string;
  city: string;
  province: string;
  zipCode: string;
}
