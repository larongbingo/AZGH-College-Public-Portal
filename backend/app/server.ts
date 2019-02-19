import cookieParser from "cookie-parser";
import Express, { NextFunction, Request, Response } from "express"; 
// tslint:disable-next-line:no-implicit-dependencies
import createError, { HttpError } from "http-errors";
import logger from "morgan";

export const EXPRESS = Express();

EXPRESS.use(logger("dev"));
EXPRESS.use(Express.json());
EXPRESS.use(Express.urlencoded({ extended: false }));
EXPRESS.use(cookieParser());

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
