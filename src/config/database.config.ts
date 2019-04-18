const commonSettings = {
  dialect: "mysql",
  database: "azgh",
};

export const development = {
  ...commonSettings,
  username: "root",
  password: "root",
};

export const production = {
  ...commonSettings,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
};
