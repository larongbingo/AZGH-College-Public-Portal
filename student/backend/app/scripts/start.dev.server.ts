import debug from "debug";
import { createServer } from "http";

import "../database/orm"; // To run the addModels function
import { EXPRESS as app } from "../server";

import "./cleanup";

let port = normalizePort(process.env.PORT || "3000");
app.set("port", port);

let server = createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val: any): any {
  let _port = parseInt(val, 10);
  if(isNaN(_port)) { return val; }
  if(_port >= 0) { return _port; }
  return false;
}

function onError(err: any): void {
  if(err.syscall !== "listen") { throw err; }
  let bind = typeof port === "string" ?
    "Pipe " + port : "Port " + port;
  switch(err.code) {
    case "EACCES":
      console.error(`Requires privileged access at ${bind}`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(2);
      break;
    default:
      throw err;
  }
}

function onListening(): void {
  let serverDebugger = debug("student_portal:API_server");
  let addr = server.address();
  let bind = typeof addr === "string" ?
    "pipe " + addr : "port " + addr!.port;
  serverDebugger("Listening on " + bind);
  console.log(`Listening on ${bind}`);
}
