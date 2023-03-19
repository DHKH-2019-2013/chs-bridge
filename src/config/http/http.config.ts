import { AppConfig, IConfig } from "../app/app.config";
import { IHttpConfig } from "./http.config.i";

export class HttpConfig {
  private appConfig: IConfig;

  constructor() {
    this.appConfig = new AppConfig();
  }

  getConfig(): IHttpConfig {
    return {
      bot: {
        initializeChessBoard: `${this.appConfig.botBaseUrl}/initialize-chess-board`,
        getMove: `${this.appConfig.botBaseUrl}/move`,
        checkValidMove: `${this.appConfig.botBaseUrl}/check-valid-move`,
      },
    };
  }
}
