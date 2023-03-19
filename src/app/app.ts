import express from "express";
import * as dotenv from "dotenv";
import { AppConfig } from "../config/app/app.config";
import cors from "cors";

import * as botRouter from "./router/bot/bot.router";
import * as boardRouter from "./router/board/board.router";
import { LoggerService } from "./service/logger/logger";

class App {
  private app = express();
  private config = new AppConfig();
  private logger = new LoggerService();

  constructor() {
    dotenv.config();
    this.app.use(cors);

    this.app.use(botRouter.default);
    this.app.use(boardRouter.default);

    this.app.listen(this.config.port, () => {
      this.logger.info(`Listening on port: ${this.config.port}`);
    });
  }
}

new App();
