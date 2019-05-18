import { Module } from "@nestjs/common";

import { UserModule } from "../shared/user/user.module";
import { DatabaseModule } from "../shared/database/database.module";
import { AuthModule } from "../shared/auth/auth.module";
import { UserAddressModule } from "../shared/user.address/user-address.module";

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    UserAddressModule,
    AuthModule,
  ],
})
export class AppModule {}
