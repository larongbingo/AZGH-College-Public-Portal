import { Module } from "@nestjs/common";

import { UserGuardianProvider } from "./user-guardian.provider";
import { UserGuardianService } from "./user-guardian.service";

@Module({
  providers: [UserGuardianProvider, UserGuardianService],
  exports: [UserGuardianService],
})
export class UserGuardianModule {}
