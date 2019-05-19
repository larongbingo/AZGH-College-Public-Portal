
export class UpdateUserDetailsDto {
  public readonly firstName?: string;
  public readonly middleName?: string;
  public readonly lastName?: string;
  public readonly suffix?: string;
  public readonly gender?: string;
  public readonly civilStatus?: string;
  public readonly citizenship?: string;
  public readonly dateOfBirth?: Date;
  public readonly birthPlace?: string;
  public readonly religion?: string;
}
