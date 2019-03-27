import { NextFunction, Request, Response, Router } from "express";
// tslint:disable-next-line: no-submodule-imports
import { check, validationResult } from "express-validator/check";
import createHttpError from "http-errors";
import multer from "multer";
import { Op } from "sequelize";

import { Student } from "../../database/models/student";
import { APIResponse } from "../../lib/APIResponse";
import { logEvent } from "../../services/logging";
import { createSession, destroySession } from "../../services/session.manager";

export const AUTH = Router();

const upload = multer();

AUTH.post(
  "/apis/login", 
  [
    upload.none(),
    check("username").isLength({min: 1}),
    check("password").isLength({min: 1})
  ], 
  async (req: Request, res: Response) => {
    try {
      const ERRORS = validationResult(req);
      if(!ERRORS.isEmpty()) { return res.status(422).json(new APIResponse({errors: ERRORS.array()})); }
      
      let student = await Student.findOne({where: {username: {[Op.eq]: req.body.username}}});

      if(!student || !await student.checkPassword(req.body.password)) {
        logEvent({ 
          event: "LogIn Attempt", 
          description: `Failed login attempt to username ${req.body.username}`,
          params: JSON.stringify(req.body)
        });

        return res
          .status(422)
          .json(new APIResponse({errors: [{msg: "Invalid username or password"}]})); 
      }

      logEvent({
        event: "LogIn Attempt",
        description: `Successful login attempt to username ${req.body.username}`,
        studentId: student.studentId
      });

      return res.status(200).json(new APIResponse({token: createSession(student.studentId)}));  
    }
    catch(err) {
      console.error(err);
      
      logEvent({
        event: "LogIn Attempt",
        description: `Error occurred ${JSON.stringify(err)}`,
        params: JSON.stringify(req.body)
      });
      
      return res.status(500).json(new APIResponse({errors: [createHttpError(500)]}));
    }
  }
);

AUTH.post(
  "/apis/logout",
  [
    check("token").isLength({min: 1})
  ],
  async (req: Request, res: Response) => {
    throw new Error("Function not implemented");
  }
);
