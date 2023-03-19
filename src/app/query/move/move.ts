import { HttpConfig } from "../../../config/http/http.config";
import { HttpService } from "../../service/http/http.service";
import { CheckValidMoveParams, CheckValidMoveResult, GetMoveParams, GetMoveResult } from "./move.i";

export class GetMove {
  private httpConfig;
  private httpService;

  constructor() {
    this.httpConfig = new HttpConfig();
    this.httpService = new HttpService();
  }

  async get(params: GetMoveParams): Promise<GetMoveResult> {
    const url = this.httpConfig.getConfig().bot.getMove;

    return await this.httpService
      .get(url, params)
      .then((data: GetMoveResult) => {
        return data;
      })
      .catch((e) => {
        throw new Error(e);
      });
  }

  async checkValidMove(params: CheckValidMoveParams): Promise<CheckValidMoveResult> {
    const url = this.httpConfig.getConfig().bot.checkValidMove;

    return await this.httpService
      .get(url, params)
      .then((data: CheckValidMoveResult) => {
        return data;
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
}
