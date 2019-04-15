import { ISequelizeConfig, Sequelize } from "sequelize-typescript";

import { development, production, test } from "../config";

import { addModels } from "./add.models";

let config;

if(process.env.NODE_ENV === "production") {
  config = production;
}
else if(process.env.NODE_ENV === "development") {
  config = development;
}
else {
  config = test;
}

export const SEQUELIZE = new Sequelize({
  ...config as ISequelizeConfig
});

addModels(SEQUELIZE);
