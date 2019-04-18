import csurf from "csurf";
import { RequestHandler } from "express";

export const csrfProtection = csurf({
  cookie: true
});
