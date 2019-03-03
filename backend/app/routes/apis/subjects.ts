import { Request, Response, Router } from "express";
import createHttpError from "http-errors";
import { Op } from "sequelize";

import { Program } from "../../database/models/program";
import { APIResponse } from "../../lib/APIResponse";

export const SUBJECTS = Router();

SUBJECTS.get(
  "/apis/subjects",
  async (req: Request, res: Response) => {
    try {
      // TODO: Add filter by subjectCode/id

      let searchParams = req.params.subjectTitle ? 
      {where: {title: {[Op.eq]: req.params.subjectTitle}}} : 
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
