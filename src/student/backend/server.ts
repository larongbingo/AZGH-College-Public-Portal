import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import csurf from "csurf";
import Express, { NextFunction, Request, Response } from "express"; 
import expressSession from "express-session";
import helmet, { noCache } from "helmet";
import createError, { HttpError } from "http-errors";
import logger from "morgan";

import { SESSION_PRIVATE_KEY } from "../../common/config";

export const EXPRESS = Express();

EXPRESS.use(compression());
EXPRESS.use(expressSession({
  secret: SESSION_PRIVATE_KEY
}));

EXPRESS.use(helmet());
EXPRESS.use(noCache());
EXPRESS.use(logger("dev"));
EXPRESS.use(Express.json());
EXPRESS.use(Express.urlencoded({ extended: false }));
EXPRESS.use(cookieParser());
EXPRESS.use(cors());

// Routes

EXPRESS.use(function(req, res, next) {
  next(createError(404));
});

// @ts-ignore
EXPRESS.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  let message = err.message;
  let error = req.app.get("env") === "development" ? err : {};

  res.json({message, error}).status(err.status || 500);
});
