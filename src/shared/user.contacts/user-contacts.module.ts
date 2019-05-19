import { Module } from "@nestjs/common";

import { UserContactsProvider } from "./user-contacts.provider";
import { UserContactsService } from "./user-contacts.service";
import { UserContactsController } from "./user-contacts.controller";

@Module({
  providers: [UserContactsProvider, UserContactsService],
  exports: [UserContactsService],
  controllers: [UserContactsController],
})
export class UserContactsModule {}
