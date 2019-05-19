import { Module } from "@nestjs/common";

import { UserGuardianProvider } from "./user-guardian.provider";
import { UserGuardianService } from "./user-guardian.service";
import { UserGuardianController } from "./user-guardian.controller";

@Module({
  providers: [UserGuardianProvider, UserGuardianService],
  exports: [UserGuardianService],
  controllers: [UserGuardianController],
})
export class UserGuardianModule {}
