import { Sequelize } from "sequelize-typescript";

import { DATABASE } from "../config";

(async function() {
  try {
    // TODO: Find a way to connect to mysql server without specifying what database to use
    console.log("Creating new Sequelize ORM instance");
    let syncSeq = new Sequelize({
      ...DATABASE,
      database: "mysql",
      dialect: "mysql"
    });

    console.log(`Creating database ${DATABASE.database}`);
    await syncSeq.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE.database}`);
    
    console.log(`Closing connection from Sequelize`);
    await syncSeq.close();

    console.log(`Successfully created database ${DATABASE.database}`);
    process.exit(0);
  }
  catch(err) {
    console.error(err);
    process.exit(1);
  }
})();
