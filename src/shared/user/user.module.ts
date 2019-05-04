import { Module } from "@nestjs/common";

import { UserService } from "./user.service";
import { UserRepositoryProvider } from "./user.provider";

@Module({
  providers: [UserService, UserRepositoryProvider],
  exports: [UserService],
})
export class UserModule {}
