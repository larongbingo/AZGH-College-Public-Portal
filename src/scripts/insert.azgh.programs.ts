import { Program } from "../shared/database/models/Program.entity";
import { programs } from "../shared/constants/azgh.programs";
import "../shared/database/sequelize.instance";

(async () => {
  if (process.env.NODE_ENV === "production") {
    console.log("SCRIPT WILL NOT RUN! Environment is at production");
    process.exit(1);
  }

  try {
    await Promise.all(programs.map(program => Program.create(program)));
  } catch (err) {
    console.log(err);
    process.exit(2);
  }

  process.exit(0);
})();
