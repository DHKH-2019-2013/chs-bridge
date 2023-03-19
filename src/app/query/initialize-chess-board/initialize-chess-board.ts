import { HttpConfig } from "../../../config/http/http.config";
import { HttpService } from "../../service/http/http.service";
import { GetInitializeChessBoardResponse } from "./initialize-chess-board.i";

export class InitializeChessBoard {
  private httpConfig;
  private httpService;

  constructor() {
    this.httpConfig = new HttpConfig();
    this.httpService = new HttpService();
  }

  async get(): Promise<GetInitializeChessBoardResponse> {
    const url = this.httpConfig.getConfig().bot.initializeChessBoard;

    return await this.httpService
      .get(url)
      .then((data: string) => {
        return {
          fen: data,
        };
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
}
