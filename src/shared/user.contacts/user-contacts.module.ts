import { Module } from "@nestjs/common";

import { UserContactsProvider } from "./user-contacts.provider";
import { UserContactsService } from "./user-contacts.service";

@Module({
  providers: [UserContactsProvider, UserContactsService],
  exports: [UserContactsService],
})
export class UserContactsModule {}
