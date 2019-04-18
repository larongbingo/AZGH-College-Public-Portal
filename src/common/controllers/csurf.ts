import { Router } from "express";

import { csrfProtection } from "../csurf.instance";

export const csurfRoutes = Router();

csurfRoutes.get("/csurf-token", csrfProtection, (req, res, next) => {
  // @ts-ignore
  req.xResponse.csrfToken = req.csrfToken();
  next();
});
