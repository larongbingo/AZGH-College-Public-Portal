
export interface IServerResponse {

  /**
   * The time the request was processed
   */
  iat: string;

  /**
   * Result of the request
   */
  payload?: any;

  /**
   * Any errors, should any occur
   */
  errors?: any[];

  /**
   * A description of the transaction
   */
  mesage?: string;

  /**
   * The given request was successfully processed
   */
  success: boolean;

}
