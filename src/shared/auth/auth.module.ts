import { Module } from "@nestjs/common";

import { JwtKeyProvider } from "./providers/jwt-key.provider";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../user/user.module";
import { HttpStrategy } from "./http.strategy";

@Module({
  imports: [UserModule],
  providers: [AuthService, HttpStrategy, JwtKeyProvider],
  controllers: [AuthController],
})
export class AuthModule {}
