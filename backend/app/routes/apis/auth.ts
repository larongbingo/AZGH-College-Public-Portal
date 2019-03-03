import { NextFunction, Request, Response, Router } from "express";
// tslint:disable-next-line: no-submodule-imports
import { check, validationResult } from "express-validator/check";
import createHttpError from "http-errors";
import { Op } from "sequelize";

import { Student } from "../../database/models/student";
import { APIResponse } from "../../lib/APIResponse";
import { createSession, destroySession } from "../../services/session.manager";

export const AUTH = Router();

AUTH.post(
  "/apis/login", 
  [
    check("username").isLength({min: 1}),
    check("password").isLength({min: 1})
  ], 
  async (req: Request, res: Response) => {
    try {
      const ERRORS = validationResult(req);
      if(!ERRORS.isEmpty()) { return res.status(422).json(new APIResponse({errors: ERRORS.array()})); }
      
      let student = await Student.findOne({where: {username: {[Op.eq]: req.params.username}}});

      if(!student || await student.checkPassword(req.params.password)) {
        return res
          .status(422)
          .json(new APIResponse({errors: [{msg: "Invalid username or password"}]})); 
      }

      return res.status(200).json(new APIResponse({token: createSession(student.studentId)}));  
    }
    catch(err) {
      console.error(err);
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
