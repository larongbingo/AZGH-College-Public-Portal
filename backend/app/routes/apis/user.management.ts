import { Request, Response, Router } from "express";
// tslint:disable-next-line: no-submodule-imports
import { check, validationResult } from "express-validator/check";
import createHttpErrors from "http-errors";

import { Student } from "../../database/models/student";
import { StudentContact } from "../../database/models/student.contact";
import { StudentDetails } from "../../database/models/student.details";
import { StudentSchoolBackground } from "../../database/models/student.school.background";
import { APIResponse } from "../../lib/APIResponse";

export const USER_MANAGEMENT = Router();

USER_MANAGEMENT.post(
  "/apis/user/register",
  [
    // User Credentials
    check("username").isLength({min: 1}),
    check("password").isLength({min: 1}),
    
    // User Contact
    check("phoneNumber").isLength({min: 1}),
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
        username: req.params.username,
        password: req.params.password
      });
      
      await StudentContact.create({
        emailAddress: req.params.emailAddress,
        phoneNumber: req.params.phoneNumber,
        telephoneNumber: req.params.telephoneNumber ? req.params.telephoneNumber : "NONE",
        studentId: student.studentId,
      });

      await StudentDetails.create({
        lrn: req.params.lrn,
        firstName: req.params.firstName,
        lastName: req.params.lastName,
        middleName: req.params.middleName,
        gender: req.params.gender,
        status: req.params.status,
        citizenship: req.params.citizenship,
        birthPlace: req.params.birthPlace,
        birthDate: req.params.birthDate,
      });

      return res.status(200).json(new APIResponse({newStudentId: student.studentId}));
    }
    catch(err) {
      console.error(err);
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
