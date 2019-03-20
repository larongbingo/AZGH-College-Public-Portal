import program from "commander";
import { writeFileSync } from "fs";

program
  .version("0.0.1")
  .option("--testing_values", "Assigns testing values into config.ts")
  .option("--mysql_database_name [DB_NAME]", "The name of the database in MySQL")
  .option("--mysql_username [USERNAME]", "The username to connect to the MySQL Server")
  .option("--mysql_password [PASSWORD]", "The password to connect to the MySQL")
  .parse(process.argv);
  
if(Object.keys(program.opts()).length === 0) {
  program.outputHelp();
  console.log(program.opts());
  process.exit(0);
}

if(program.testing_values) {
  console.log("Creating config.ts file using testing values");
  writeFileSync(
    "./app/config.ts",
    `export const DATABASE = {
  database: "student_portal",
  username: "root",
  password: "root",
};
`
  );
}
