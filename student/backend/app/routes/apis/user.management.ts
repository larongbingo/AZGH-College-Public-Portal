import { Request, Response, Router } from "express";
// tslint:disable-next-line: no-submodule-imports
import { check, validationResult } from "express-validator/check";
import createHttpErrors from "http-errors";
import multer from "multer";
import { Op } from "sequelize";

import { Guardian } from "../../database/models/guardian";
import { Program } from "../../database/models/program";
import { Student } from "../../database/models/student";
import { StudentContact } from "../../database/models/student.contact";
import { StudentDetails } from "../../database/models/student.details";
import { StudentSchoolBackground } from "../../database/models/student.school.background";
import { APIResponse } from "../../lib/APIResponse";
import { logEvent } from "../../services/logging";
import { getAssociatedStudentId } from "../../services/session.manager";

export const USER_MANAGEMENT = Router();

const upload = multer();

USER_MANAGEMENT.get(
  "/apis/user",
  [
    upload.none(),
    check("sessionToken").isString().isLength({min: 1})
  ],
  async (req: Request, res: Response) => {
    const ERRORS = validationResult(req);
    if(!ERRORS.isEmpty()) { return res.status(422).json(new APIResponse({errors: ERRORS.array()})); }

    let studentId = getAssociatedStudentId(req.body.sessionToken);
    if(!studentId) {
      return res.status(422).json(new APIResponse({errors: [{msg: "Invalid sessionToken"}]}));
    }

    try {
      let student = await Student.findOne({where: {studentId: {[Op.eq]: studentId}}});
      
      if(!student) {
        return res.status(422).json(new APIResponse({errors: [{msg: "User does not exist, please login again"}]}));
      }

      return res.status(200).json(new APIResponse({details: {
        personal: await student.$get<StudentDetails>("details"),
        contact: await student.$get<StudentContact>("contact"),
        program: await student.$get<Program>("enrolledProgram"),
        guardian: await student.$get<Guardian>("guardian"),
        schoolBackground: await student.$get<StudentSchoolBackground>("schoolBackground")
      }}));
    }
    catch(err) {
      console.error(err);
      return res.status(500).json(new APIResponse({errors: [{msg: "Internal Server Error"}]}));
    }
  }
);

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
        studentId: student.studentId
      });

      logEvent({
        event: "Student Registration",
        description: `New student register nicknamed ${student.username}`,
        studentId: student.studentId
      });

      return res.status(200).json(new APIResponse({newStudentId: student.studentId}));
    }
    catch(err) {
      if(err.message.match(/^Provided username/)) {
        return res.status(422).json(new APIResponse({errors: [{msg: err.message}]}));
      }

      logEvent({
        event: "Student Registration",
        description: `Error occurred: ${JSON.stringify(err)}`,
        params: JSON.stringify(req.body)
      });

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
