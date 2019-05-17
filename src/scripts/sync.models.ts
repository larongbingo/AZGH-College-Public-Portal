import { sequelize } from "../shared/database/sequelize.instance";

(async () => {
  if (process.env.NODE_ENV === "production") {
    console.log("SCRIPT WILL NOT RUN BECAUSE THE ENVIRONMENT IS ON PRODUCTION");
    process.exit(2);
  }

  try {
    await sequelize.query(`DROP DATABASE ${sequelize.options.database}`);
    await sequelize.query(`CREATE DATABASE ${sequelize.options.database}`);
    await sequelize.query(`USE ${sequelize.options.database}`);
    await sequelize.sync();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
  process.exit(0);
})();
