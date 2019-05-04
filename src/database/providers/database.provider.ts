import { Provider } from "@nestjs/common";
import { Sequelize, ISequelizeConfig } from "sequelize-typescript";

import { development, production } from "../../config/database.config";
import { addModels } from "../libs/add.models";

export const SEQUELIZE_REPOSITORY = "SEQUELIZE_REPOSITORY";

export const databaseProvider: Provider = {
  provide: SEQUELIZE_REPOSITORY,
  useFactory: async () => {
    let config: ISequelizeConfig;
    if (process.env.NODE_ENV === "production") {
      config = production;
    } else {
      config = development;
    }

    const sequelize = new Sequelize({
      ...(config as ISequelizeConfig),
    });
    addModels(sequelize);
    await sequelize.sync();
    return sequelize;
  },
};
