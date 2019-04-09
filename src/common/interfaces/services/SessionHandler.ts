import { User } from "../../database/models/User";

export interface ICreateSession {
  createSession(user: User): Promise<string>;
}

export interface IDestroySession {
  destroySession(session: string): Promise<boolean>;
}

export interface IValidateSession {
  isSessionValid(session: string): Promise<boolean>;
}
