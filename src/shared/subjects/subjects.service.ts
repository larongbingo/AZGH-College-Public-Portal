import { Injectable, Inject, UnprocessableEntityException } from "@nestjs/common";
import { IFindOptions, ICreateOptions } from "sequelize-typescript";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { Op } from "sequelize";

import { Subject } from "../database/models/Subject.entity";

import { SUBJECTS_REPOSITORY } from "./subjects.provider";

@Injectable()
export class SubjectsService {
  constructor(
    @Inject(SUBJECTS_REPOSITORY) private readonly subjectsRepository: typeof Subject,
  ) {}

  public async findOneById(id: string) {
    const subject = await this.subjectsRepository.findOne({ where: { subjectCode: { [Op.eq]: id } } });
    if (!subject) {
      throw new UnprocessableEntityException("Invalid subject code");
    }
    return subject;
  }

  public async findOne(options?: IFindOptions<Subject>) {
    return this.subjectsRepository.findOne(options);
  }

  public async findAll(options?: IFindOptions<Subject>) {
    return this.subjectsRepository.findAll(options);
  }

  public async create(values: FilteredModelAttributes<Subject>, options?: ICreateOptions) {
    return this.subjectsRepository.create(values, options);
  }
}
