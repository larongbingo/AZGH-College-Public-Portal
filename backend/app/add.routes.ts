import { Express } from "express";

import { AUTH } from "./routes/apis/auth";
import { SUBJECTS } from "./routes/apis/subjects";
import { USER_MANAGEMENT } from "./routes/apis/user.management";

/**
 * Adds the route to the given express instance
 * @param express The express instance that needs to be modified
 */
export function addRoutes(express: Express): void {
  express.use(AUTH);
  express.use(SUBJECTS);
  express.use(USER_MANAGEMENT);
}
