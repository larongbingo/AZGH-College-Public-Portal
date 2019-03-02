import { Express } from "express";

import { LOGIN } from "./routes/apis/login";

/**
 * Adds the route to the given express instance
 * @param express The express instance that needs to be modified
 */
export function addRoutes(express: Express): void {
  express.use(LOGIN);
}
