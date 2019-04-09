import { Container } from "inversify";

import { User } from "./common/database/models/User";
import { USER_QUERIES, UserQueries } from "./common/database/queries/UserQueries";
import { ICreate } from "./common/interfaces/queries/ICreate";
import { IFindAll } from "./common/interfaces/queries/IFindAll";
import { IFindOne } from "./common/interfaces/queries/IFindOne";
import { ILogIn } from "./common/interfaces/services/Authentication";
import { ICreateSession, IDestroySession, IValidateSession } from "./common/interfaces/services/SessionHandler";
import { Authentication, AUTHENTICATION_SERVICE } from "./common/services/authentication";
import { SESSION_SERVICE, SessionHandler } from "./common/services/session";

export const DEPENDENCY_CONTAINER = new Container();

DEPENDENCY_CONTAINER.bind<ICreate<User>>(USER_QUERIES.create).to(UserQueries).inSingletonScope();
DEPENDENCY_CONTAINER.bind<IFindAll<User>>(USER_QUERIES.findAll).to(UserQueries).inSingletonScope();
DEPENDENCY_CONTAINER.bind<IFindOne<User>>(USER_QUERIES.findOne).to(UserQueries).inSingletonScope();

DEPENDENCY_CONTAINER.bind<ILogIn>(AUTHENTICATION_SERVICE.logIn).to(Authentication).inSingletonScope();

DEPENDENCY_CONTAINER.bind<ICreateSession>(SESSION_SERVICE.createSession).to(SessionHandler).inSingletonScope();
DEPENDENCY_CONTAINER.bind<IDestroySession>(SESSION_SERVICE.destroySession).to(SessionHandler).inSingletonScope();
DEPENDENCY_CONTAINER.bind<IValidateSession>(SESSION_SERVICE.validateSession).to(SessionHandler).inSingletonScope();
