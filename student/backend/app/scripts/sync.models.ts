import { ORM } from "../database/orm";

(async function() {
  try {
    await ORM.query(`DROP DATABASE ${ORM.options.database};`);
    await ORM.query(`CREATE DATABASE ${ORM.options.database};`);
    await ORM.query(`USE ${ORM.options.database}`);
    await ORM.sync({force: true});
    process.exit(0);
  }
  catch(err) {
    console.error(err);
    process.exit(1);
  }
})();
