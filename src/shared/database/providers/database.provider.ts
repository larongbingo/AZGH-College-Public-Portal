import { Provider } from "@nestjs/common";

import { sequelize } from "../sequelize.instance";

export const SEQUELIZE_REPOSITORY = "SEQUELIZE_REPOSITORY";

export const databaseProvider: Provider = {
  provide: SEQUELIZE_REPOSITORY,
  useFactory: async () => sequelize,
};
