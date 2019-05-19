import { Module } from "@nestjs/common";

import { UserPreviousSchoolProvider } from "./user-previous-school.provider";
import { UserPreviousSchoolService } from "./user-previous-school.service";
import { UserPreviousSchoolController } from "./user-previous-school.controller";

@Module({
  providers: [UserPreviousSchoolProvider, UserPreviousSchoolService],
  exports: [UserPreviousSchoolService],
  controllers: [UserPreviousSchoolController],
})
export class UserPreviousSchoolModule {}
