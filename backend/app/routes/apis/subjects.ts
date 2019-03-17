import { Request, Response, Router } from "express";
// tslint:disable-next-line: no-submodule-imports
import { check, validationResult } from "express-validator/check";
import createHttpError from "http-errors";
import multer from "multer";
import { Op } from "sequelize";

import { Program } from "../../database/models/program";
import { Student } from "../../database/models/student";
import { APIResponse } from "../../lib/APIResponse";
import { getAssociatedStudentId } from "../../services/session.manager";

export const SUBJECTS = Router();

const upload = multer();

SUBJECTS.get(
  "/apis/subjects",
  async (req: Request, res: Response) => {
    try {
      // TODO: Add filter by subjectCode/id

      let searchParams = req.query.subjectTitle ? 
      {where: {title: {[Op.like]: `%${req.query.subjectTitle}%`}}} : 
      undefined;

      let programs = await Program.findAll(searchParams);
      
      return res.status(200).json(new APIResponse({programs}));
    }
    catch(err) {
      console.error(err);
      return res.status(500).json(new APIResponse({errors: [createHttpError(500)]}));
    }
  }
);

SUBJECTS.post(
  "/apis/subjects/enroll",
  [ 
    upload.none(),
    check("sessionToken").isLength({min: 1}),
    check("programId").isLength({min: 1})
  ],
  async (req: Request, res: Response) => {
    const ERRORS = validationResult(req);
    if(!ERRORS.isEmpty()) { return res.status(422).json(new APIResponse({errors: ERRORS.array()})); }
    
    let userId = getAssociatedStudentId(req.body.sessionToken);
    if(!userId) {
      return res.status(422).json(new APIResponse({errors: [{msg: "Invalid Session Token"}]}));
    }

    try {
      let [program, student] = await Promise.all([
        Program.findOne({where: {code: {[Op.eq]: req.body.programId}}}),
        Student.findOne({where: {studentId: {[Op.eq]: userId}}})
      ]);

      if(!program) {
        return res.status(422).json(new APIResponse({errors: [{msg: "Program does not exist", param: "programId"}]}));
      }

      if(!student) {
        return res
          .status(422)
          .json(new APIResponse({errors: [{msg: "Student does not exist", param: "sessionToken"}]}));
      }

      student!.programEnrolled = program.code;
      await student!.save();

      return res.status(200).json(new APIResponse({msg: "Successfully enrolled in the program"}));
    }
    catch(err) {
      console.log(err);
      return res.status(500).json(new APIResponse({errors: [createHttpError(500)]}));
    }
  }
);
