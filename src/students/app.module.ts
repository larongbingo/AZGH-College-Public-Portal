import { Module } from "@nestjs/common";

import { UserModule } from "../shared/user/user.module";
import { DatabaseModule } from "../shared/database/database.module";
import { AuthModule } from "../shared/auth/auth.module";
import { EnrollmentModule } from "../shared/enrollment/enrollment.module";
import { GradesModule } from "src/shared/grades/grades.module";

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    EnrollmentModule,
    GradesModule,
  ],
})
export class AppModule {}
