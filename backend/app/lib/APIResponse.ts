export class APIResponse {
  public payload = {};
  public iat = Date.now();

  constructor(payload: any) {
    this.payload = payload;
  }
}
