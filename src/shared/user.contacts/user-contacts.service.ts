import { Injectable, Inject } from "@nestjs/common";

import { UserContacts } from "../database/models/UserContacts.entity";

import { USER_CONTACTS_REPOSITORY } from "./user-contacts.provider";
import { FilteredModelAttributes } from "sequelize-typescript/lib/models/Model";
import { ICreateOptions, IFindOptions } from "sequelize-typescript";

@Injectable()
export class UserContactsService {
  constructor(
    @Inject(USER_CONTACTS_REPOSITORY) private readonly userContactsRepository: typeof UserContacts,
  ) {}

    public async create(values: FilteredModelAttributes<UserContacts>, options?: ICreateOptions) {
      return this.userContactsRepository.create(values, options);
    }

    public async findOne(options?: IFindOptions<UserContacts>) {
      return this.userContactsRepository.findOne(options);
    }

    public async findAll(options?: IFindOptions<UserContacts>) {
      return this.userContactsRepository.findAll(options);
    }
}
