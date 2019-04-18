import { Sequelize, ISequelizeConfig } from "sequelize-typescript";

import { development, production } from "../config/database.config";

import { addModels } from "./add.models";

export const databaseProviders = [
  {
    provide: "SEQUELIZE",
    useFactory: async () => {
      let config;

      if (process.env.NODE_ENV === "development") {
        config = development;
      } else {
        config = production;
      }

      const sequelize = new Sequelize({
        ...config as ISequelizeConfig,
      });
      addModels(sequelize);
      await sequelize.sync();
      return sequelize;
    },
  },
];

