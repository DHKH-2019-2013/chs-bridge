import { HttpConfig } from "../../../config/http/http.config";
import { HttpService } from "../../service/http/http.service";

export class InitializeChessBoard {
  private httpConfig;
  private httpService;

  constructor() {
    this.httpConfig = new HttpConfig();
    this.httpService = new HttpService();
  }

  async get(): Promise<string> {
    const url = this.httpConfig.getConfig().bot.initializeChessBoard;

    return await this.httpService
      .get(url)
      .then((data: string) => {
        return data;
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
}
