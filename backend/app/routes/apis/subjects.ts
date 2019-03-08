import { Request, Response, Router } from "express";
// tslint:disable-next-line: no-submodule-imports
import { check, validationResult } from "express-validator/check";
import createHttpError from "http-errors";
import { Op } from "sequelize";

import { Program } from "../../database/models/program";
import { Student } from "../../database/models/student";
import { APIResponse } from "../../lib/APIResponse";

export const SUBJECTS = Router();

SUBJECTS.get(
  "/apis/subjects",
  async (req: Request, res: Response) => {
    try {
      // TODO: Add filter by subjectCode/id

      let searchParams = req.params.subjectTitle ? 
      {where: {title: {[Op.like]: `%${req.params.subjectTitle}%`}}} : 
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

SUBJECTS.get(
  "/apis/subjects/enrolled",
  [
    check("programId").isLength({min: 1})
  ],
  async (req: Request, res: Response) => {
    const ERRORS = validationResult(req);
    if(!ERRORS.isEmpty()) { return res.status(422).json(new APIResponse({errors: ERRORS.array()})); }

    try {
      let enrolledStudents = await Student.findAll({where: {enrolledProgram: {[Op.eq]: req.params.programId}}});
      let returnables: any[] = [];
      
      // To prevent private data to be leaked
      enrolledStudents.forEach((student) => {
        returnables.push({
          firstName: student.details.firstName,
          middleName: student.details.midddleName,
          lastName: student.details.lastName,
          id: student.studentId
        });
      });

      return res.status(200).json(new APIResponse({studentsEnrolled: returnables}));
    }
    catch(err) {
      console.log(err);
      return res.status(500).json(new APIResponse({errors: [createHttpError(500)]}));
    }
  }
);

SUBJECTS.post(
  "apis/subjects/enroll",
  [ 
    check("userId").isLength({min: 1}),
    check("programId").isLength({min: 1})
  ],
  async (req: Request, res: Response) => {
    const ERRORS = validationResult(req);
    if(!ERRORS.isEmpty()) { return res.status(422).json(new APIResponse({errors: ERRORS.array()})); }

    try {
      let [program, student] = await Promise.all([
        Program.findOne({where: {code: {[Op.eq]: req.params.programId}}}),
        Student.findOne({where: {studentId: {[Op.eq]: req.params.userId}}})
      ]);

      if(!program) {
        return res.status(422).json(new APIResponse({errors: [{msg: "Program does not exist", param: "programId"}]}));
      }

      if(!student) {
        return res.status(422).json(new APIResponse({errors: [{msg: "Student does not exist", param: "userId"}]}));
      }

      student!.programEnrolled = program.code;
      await student!.save();
    }
    catch(err) {
      console.log(err);
      return res.status(500).json(new APIResponse({errors: [createHttpError(500)]}));
    }

    return res.send(200).json(new APIResponse({msg: "Successfully updated the student"}));
  }
);
