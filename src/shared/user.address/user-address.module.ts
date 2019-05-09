import { Module } from "@nestjs/common";

import { UserAddressProvider } from "./user-address.provider";
import { UserAddressService } from "./user-address.service";

@Module({
  providers: [UserAddressProvider, UserAddressService],
  exports: [UserAddressService],
})
export class UserAddressModule {}
