import { Module } from "@nestjs/common";

import { AuthModule } from "../auth/auth.module";

import { UserService } from "./user.service";
import { UserRepositoryProvider } from "./user.provider";
import { UserController } from "./user.controller";

@Module({
  providers: [UserService, UserRepositoryProvider],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
