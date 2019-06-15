import { Injectable, Inject, BadRequestException } from "@nestjs/common";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";
import { Op } from "sequelize";

import { StudentSchedule } from "../database/models/StudentSchedule.entuty";
import { Schedule } from "../database/models/Schedule.entity";
import { Semester } from "../database/models/Semester.entity";

import { STUDENT_SCHEDULE_PROVIDER } from "./student-schedule.provider";


@Injectable()
export class StudentScheduleService {
  constructor(
    @Inject(STUDENT_SCHEDULE_PROVIDER) private readonly studentScheduleRepository: typeof StudentSchedule,
  ) {}
  
  public async findOneById(id: string) {
    const studentSched = await this.studentScheduleRepository.findOne({where: {studentScheduleId: {[Op.eq]: id}}});
    if(!studentSched) {
      throw new BadRequestException("The given studentSchedule does not exist");
    }
    return studentSched;
  }

  // StudentSchedule - Schedule - Semester
  public async findAllBySemester(id: string, semester: string) {
    return await this.studentScheduleRepository.findAll({
      where: {
        studentScheduleId: {[Op.eq]: id},
      },
      include: [
        Schedule,
      ],
    })
  }

  public async create(values: FilteredModelAttributes<StudentSchedule>, options?: ICreateOptions) {
    return this.studentScheduleRepository.create(values, options);
  }

  public async findAll(options?: IFindOptions<StudentSchedule>) {
    return this.studentScheduleRepository.findAll(options);
  }
}
