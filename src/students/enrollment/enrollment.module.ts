import { Module } from "@nestjs/common";

import { AuthModule } from "../../shared/auth/auth.module";
import { UserModule } from "../../shared/user/user.module";
import { SubjectsModule } from "../../shared/subjects/subjects.module";

import { EnrollmentService } from "./enrollment.service";

@Module({
  imports: [UserModule, SubjectsModule, AuthModule],
  providers: [EnrollmentService],
})
export class EnrollmentModule {}
