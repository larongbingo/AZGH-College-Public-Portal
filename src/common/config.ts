
const commonDBConfig = {
  database: "azgh",
  dialect: "mysql"
};

export const JWT_SESSION_PRIVATE_KEY = process.env.JWT_SESSION_PRIVATE_KEY ||  "SUp#erCalifraGi!listi@##cexpialD(cious";

export const SESSION_PRIVATE_KEY = process.env.SESSION_PRIVATE_KEY || "ASDlkjasd)(U$JIBAKSNDF(*!H#@$";

export const development = {
  username: "root",
  password: "root",
  ...commonDBConfig
};

export const test = {
  username: "root",
  password: "root",
  ...commonDBConfig
};

export const production = {
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  ...commonDBConfig
};
