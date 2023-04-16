import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import http from "http";
import { AppConfig } from "../config/app/app.config";
import { LoggerService } from "./service/logger/logger";

import * as botRouter from "./router/rest-api/bot/bot.router";
import { SocketServer } from "./router/socket/socket";

class App {
  private app = express();
  private config = new AppConfig();
  private logger = new LoggerService();

  constructor() {
    dotenv.config();
    this.app.use(cors());

    this.app.use(botRouter.default);

    const server = http.createServer(this.app);
    new SocketServer(server);

    server.listen(this.config.port, () => {
      this.logger.info("Listening on port: ", this.config.port);
    });
  }
}

new App();
