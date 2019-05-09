import { Module } from "@nestjs/common";

import { UserDetailsService } from "./user-details.service";
import { UserDetailsProvider } from "./user-details.provider";

@Module({
  providers: [UserDetailsProvider, UserDetailsService],
  exports: [UserDetailsService],
})
export class UserDetailsModule {}
