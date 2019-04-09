import { inject, injectable } from "inversify";
import { Op } from "sequelize";

import { User } from "../database/models/User";
import { USER_QUERIES } from "../database/queries/UserQueries";
import { IFindOne } from "../interfaces/queries/IFindOne";
import { ILogIn } from "../interfaces/services/Authentication";
import { ICreateSession } from "../interfaces/services/SessionHandler";

import { SESSION_SERVICE } from "./session";

export const AUTHENTICATION_SERVICE = {
  logIn: Symbol.for("Authentication.logIn")
};

@injectable()
export class Authentication implements ILogIn { 
  private _userFindOne: IFindOne<User>;
  private _createSession: ICreateSession;
  
  constructor(
    @inject(USER_QUERIES.findOne)
    userFindOne: IFindOne<User>,

    @inject(SESSION_SERVICE.createSession)
    createSession: ICreateSession
  ) {
    this._userFindOne = userFindOne;
    this._createSession = createSession;
  }

  public async logIn(username: string, password: string): Promise<string | null> {
    let user = await this._userFindOne.findOne({where: {username: {[Op.eq]: username}}});
    
    // Check if there matches any account with the given username
    if(!user) {
      return null;
    }

    // Check if the password matches with the hash
    if(!await user!.checkPassword(password)) {
      return null;
    }

    return this._createSession.createSession(user!);
  }
}
