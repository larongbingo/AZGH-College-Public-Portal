import debug from "debug";
import ExpressClass, { Express } from "express";
import { createServer } from "http";
import { join } from "path";
import { create } from "swagger-express-mw";

export const app = ExpressClass();

create({ appRoot: join(__dirname, "..") }, (swaggerErr, swaggerExpress) => {
  if(swaggerErr) {
    throw swaggerErr;
  }

  swaggerExpress.register(app);
  setupServer(app);
});

function setupServer(expressApp: Express) {
  const server = createServer(expressApp);

  let port = process.env.PORT || 3000;
  expressApp.set("port", port);

  let hostname = process.env.HOST || "127.0.0.1";
  expressApp.set("host", hostname);

  server.listen(port);
  server.on("listening", onListening);
  server.on("error", onError);

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
}
