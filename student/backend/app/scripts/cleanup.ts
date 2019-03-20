import nodeClenaup from "node-cleanup";

import { ORM } from "../database/orm";

nodeClenaup((exitCode, signal) => {
  ORM.close();
  return undefined;
});
