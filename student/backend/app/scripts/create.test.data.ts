import { hacker, internet } from "faker";
import { generate } from "randomstring";

import { Program } from "../database/models/program";
import { Student } from "../database/models/student";
import "../database/orm";

(async function() {
  try {
    for(let i = 0; i < 10; i++) {
      await Program.create({
        code: hacker.abbreviation() + generate({length: 5}), 
        title: hacker.noun(), 
        description: hacker.adjective()
      });
      
      await Student.create({
        username: internet.userName(),
        password: internet.password()
      });
    }
  }
  catch(err) {
    console.error(err);
    process.exit(1);
  }

  process.exit(0);
})();
