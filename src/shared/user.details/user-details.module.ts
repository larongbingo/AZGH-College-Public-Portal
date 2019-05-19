import { Module } from "@nestjs/common";

import { UserDetailsService } from "./user-details.service";
import { UserDetailsProvider } from "./user-details.provider";
import { UserDetailsController } from "./user-details.controller";

@Module({
  providers: [UserDetailsProvider, UserDetailsService],
  exports: [UserDetailsService],
  controllers: [UserDetailsController],
})
export class UserDetailsModule {}
