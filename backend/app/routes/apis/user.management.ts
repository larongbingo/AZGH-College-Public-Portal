import { Request, Response, Router } from "express";
// tslint:disable-next-line: no-submodule-imports
import { check, validationResult } from "express-validator/check";
import createHttpErrors from "http-errors";
import multer from "multer";

import { Student } from "../../database/models/student";
import { StudentContact } from "../../database/models/student.contact";
import { StudentDetails } from "../../database/models/student.details";
import { StudentSchoolBackground } from "../../database/models/student.school.background";
import { APIResponse } from "../../lib/APIResponse";

export const USER_MANAGEMENT = Router();

const upload = multer();

USER_MANAGEMENT.post(
  "/apis/user/register",
  [
    upload.none(),

    // User Credentials
    check("username").isLength({min: 8}),
    check("password").isLength({min: 8, max: 72}),
    
    // User Contact
    check("phoneNumber").isLength({min: 1}).isString(),
    check("emailAddress").isEmail(),

    // Personal Details
    check("lrn").isLength({min: 1}),
    check("firstName").isLength({min: 1}),
    check("lastName").isLength({min: 1}),
    check("middleName").isLength({min: 1}),
    check("gender").isLength({min: 1}),
    check("status").isLength({min: 1}),
    check("citizenship").isLength({min: 1}),
    check("birthPlace").isLength({min: 1}),
    check("birthDate").isISO8601() // Date
  ],
  async (req: Request, res: Response) => {
    const ERRORS = validationResult(req);
    if(!ERRORS.isEmpty()) { return res.status(422).json(new APIResponse({errors: ERRORS.array()})); }

    try {
      let student = await Student.create({
        username: req.body.username,
        password: req.body.password
      });
      
      await StudentContact.create({
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber,
        telephoneNumber: req.body.telephoneNumber ? req.body.telephoneNumber : "NONE",
        studentId: student.studentId,
      });

      await StudentDetails.create({
        lrn: req.body.lrn,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        middleName: req.body.middleName,
        gender: req.body.gender,
        status: req.body.status,
        citizenship: req.body.citizenship,
        birthPlace: req.body.birthPlace,
        birthDate: req.body.birthDate,
      });

      return res.status(200).json(new APIResponse({newStudentId: student.studentId}));
    }
    catch(err) {
      if(err.message.match(/^Provided username/)) {
        return res.status(422).json(new APIResponse({errors: [{msg: err.message}]}));
      }

      return res.status(500).json(new APIResponse({errors: [createHttpErrors(500)]}));
    }
  }
);

USER_MANAGEMENT.post(
  "/apis/user/update",
  [ ],
  async (req: Request, res: Response) => {
    throw new Error("Function not implemented");
  }
);

USER_MANAGEMENT.post(
  "/apis/user/delete",
  [  ],
  async (req: Request, res: Response) => {
    throw new Error("Function not implemented");
  }
);
