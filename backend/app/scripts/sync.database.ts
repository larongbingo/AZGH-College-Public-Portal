import { DATABASE } from "../config";
import { ORM } from "../database/orm";

(async function() {
  try {
    await ORM.query(`CREATE DATABASE IF NOT EXISTS ${DATABASE.database}`);
    await ORM.query(`USE ${DATABASE.database}`);
    process.exit(0);
  }
  catch(err) {
    console.error(err);
    process.exit(1);
  }
})();
