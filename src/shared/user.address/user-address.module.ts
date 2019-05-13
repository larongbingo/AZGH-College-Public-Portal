import { Module } from "@nestjs/common";

import { UserAddressProvider } from "./user-address.provider";
import { UserAddressService } from "./user-address.service";
import { UserModule } from "../user/user.module";

@Module({
  imports: [UserModule],
  providers: [UserAddressProvider, UserAddressService],
  exports: [UserAddressService],
})
export class UserAddressModule {}
