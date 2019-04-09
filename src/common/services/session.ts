import { injectable } from "inversify";
import { sign } from "jsonwebtoken";
import Loki from "lokijs";

import { JWT_SESSION_PRIVATE_KEY } from "../config";
import { User } from "../database/models/User";
import { ICreateSession, IDestroySession, IValidateSession } from "../interfaces/services/SessionHandler";
import { ISession } from "../interfaces/types";

export const SESSION_SERVICE = {
  createSession: Symbol.for("SessionHandler.createSession"),
  destroySession: Symbol.for("SessionHandler.destroySession"),
  validateSession: Symbol.for("SessionHandler.validateSession")
};

@injectable()
export class SessionHandler implements ICreateSession, IDestroySession, IValidateSession {
  
  private _database: Loki;
  private _children: Collection<ISession>;

  constructor() {
    this._database = new Loki("sessions.json");
    this._children = this._database.addCollection("sessions");
  }
  
  public async createSession(user: User): Promise<string> {
    let iat = Date.now();
    let session = sign({username: user.username, userId: user.userId, iat}, JWT_SESSION_PRIVATE_KEY);

    if(!this._children.insert({session, iat, userId: user.userId})) {
      throw new Error("Error occured during insertion of new session");
    }

    return session;
  }
  
  public async destroySession(session: string): Promise<boolean> {
    this._children.findAndRemove({session});

    if(!this._children.find({session})) {
      return true;
    }

    return false;
  }

  public async isSessionValid(session: string): Promise<boolean> {
    if(this._children.find({session})[0].session === session) {
      return true;
    }
    
    return false;
  }

}
