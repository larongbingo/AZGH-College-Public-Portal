import { Module } from "@nestjs/common";

import { SubjectsRepositoryProvider } from "./subjects.provider";
import { SubjectsService } from "./subjects.service";

@Module({
  providers: [SubjectsRepositoryProvider, SubjectsService],
  exports: [SubjectsService],
})
export class SubjectsModule {}
