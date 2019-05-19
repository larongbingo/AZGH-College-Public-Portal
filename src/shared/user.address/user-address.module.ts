import { Module } from "@nestjs/common";

import { UserAddressProvider } from "./user-address.provider";
import { UserAddressService } from "./user-address.service";
import { UserModule } from "../user/user.module";
import { UserAddressController } from "./user-address.controller";

@Module({
  providers: [UserAddressProvider, UserAddressService],
  controllers: [UserAddressController],
  exports: [UserAddressService],
})
export class UserAddressModule {}
