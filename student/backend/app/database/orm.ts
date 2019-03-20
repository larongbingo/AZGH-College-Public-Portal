import { Sequelize } from "sequelize-typescript";

import { DATABASE } from "../config";

import { addModels } from "./addModels";

export const ORM = new Sequelize({
  ...DATABASE,
  dialect: "mysql"
});

addModels(ORM);
