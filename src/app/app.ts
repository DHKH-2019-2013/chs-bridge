import express from "express";
import * as dotenv from "dotenv";
import { AppConfig } from "../config/app/config";

import * as botRouter from "./router/bot/bot.router";

dotenv.config();
const app = express();
const config = new AppConfig();

app.use(botRouter.default);

app.listen(config.port, () => {
  console.log(`Listening on port: ${config.port}`);
});
