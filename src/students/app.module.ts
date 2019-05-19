import { Module } from "@nestjs/common";

import { UserModule } from "../shared/user/user.module";
import { DatabaseModule } from "../shared/database/database.module";
import { AuthModule } from "../shared/auth/auth.module";

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
