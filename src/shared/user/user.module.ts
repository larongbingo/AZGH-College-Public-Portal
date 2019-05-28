import { Module } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";
import { UserAddressModule } from "../user.address/user-address.module";
import { UserContactsModule } from "../user.contacts/user-contacts.module";

import { UserService } from "./user.service";
import { UserRepositoryProvider } from "./user.provider";
import { UserController } from "./user.controller";
import { UserDetailsModule } from "../user.details/user-details.module";
import { UserGuardianModule } from "../user.guardian/user-guardian.module";
import { UserPreviousSchoolModule } from "../user.previous.school/user-previous-school.module";
import { StudentScheduleModule } from "../student.schedule/student-schedule.module";

@Module({
  imports: [
    StudentScheduleModule,
    UserAddressModule,
    UserContactsModule,
    UserDetailsModule,
    UserGuardianModule,
    UserPreviousSchoolModule,
  ],
  providers: [UserService, UserRepositoryProvider],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
