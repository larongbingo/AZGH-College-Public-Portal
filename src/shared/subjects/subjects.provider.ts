import { Provider } from "@nestjs/common";
import { Subject } from "../database/models/Subject.entity";

export const SUBJECTS_REPOSITORY = "SUBJECTS_REPOSITORY";

export const SubjectsRepositoryProvider: Provider = {
  provide: SUBJECTS_REPOSITORY,
  useValue: Subject,
};
