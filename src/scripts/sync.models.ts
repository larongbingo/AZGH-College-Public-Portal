import { SEQUELIZE } from "../common/database/sequelize";

(async function() {
  
  let isScriptFine = true;

  try {
    if(process.env.NODE_ENV === "production") {
      console.error("Environment is in production");
      process.exit(2);
    }

    console.log(`Dropping Database ${SEQUELIZE.options.database}`);
    await SEQUELIZE.query(`DROP DATABASE ${SEQUELIZE.options.database};`);

    console.log(`Creating Database ${SEQUELIZE.options.database}`);
    await SEQUELIZE.query(`CREATE DATABASE ${SEQUELIZE.options.database};`);
    await SEQUELIZE.query(`USE ${SEQUELIZE.options.database};`);

    console.log("Syncing Models");
    await SEQUELIZE.sync({force: true});

    console.log("Syncing Models Complete");
  }
  catch(err) {
    console.error(err);
    isScriptFine = false;
  }
  finally {
    await SEQUELIZE.close();
    
    if(!isScriptFine) {
      process.exit(1);
    }
    
    process.exit(0);
  }
})();
