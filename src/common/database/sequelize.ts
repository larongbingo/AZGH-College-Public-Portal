import { Sequelize } from "sequelize-typescript";

import { addModels } from "./add.models";

export const SEQUELIZE = new Sequelize({
  database: "azgh",
  username: process.env.MYSQL_USERNAME || "root",
  password: process.env.MYSQL_PASSWORD || "root",
  dialect: "mysql"
});

addModels(SEQUELIZE);
