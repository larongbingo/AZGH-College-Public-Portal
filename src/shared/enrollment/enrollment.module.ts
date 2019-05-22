import { Module } from "@nestjs/common";

import { SubjectsModule } from "../../shared/subjects/subjects.module";

import { EnrollmentService } from "./enrollment.service";

@Module({
  imports: [SubjectsModule],
  providers: [EnrollmentService],
})
export class EnrollmentModule {}
