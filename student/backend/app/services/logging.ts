import { Log } from "../database/models/log";
import { ILog } from "../interfaces/models/ILog";

export async function logEvent(event: ILog) {
  await Log.create(event);
}

export default logEvent;
