import { ISequelizeConfig, Sequelize } from "sequelize-typescript";

import { production, development } from "../config/database.config";

import { addModels } from "./libs/add.models";

let config: ISequelizeConfig;
if (process.env.NODE_ENV === "production") {
  config = production;
} else {
  config = development;
}

export const sequelize = new Sequelize({
  ...(config as ISequelizeConfig),
});

addModels(sequelize);
