import { Injectable, Inject } from "@nestjs/common";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

import { StudentSchedule } from "../database/models/StudentSchedule.entuty";

import { STUDENT_SCHEDULE_PROVIDER } from "./student-schedule.provider";

@Injectable()
export class StudentScheduleService {
  constructor(
    @Inject(STUDENT_SCHEDULE_PROVIDER) private readonly studentScheduleRepository: typeof StudentSchedule,
  ) {}
  
  public async create(values: FilteredModelAttributes<StudentSchedule>, options?: ICreateOptions) {
    return this.studentScheduleRepository.create(values, options);
  }

  public async findAll(options?: IFindOptions<StudentSchedule>) {
    return this.studentScheduleRepository.findAll(options);
  }
}
