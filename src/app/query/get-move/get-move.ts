import { HttpConfig } from "../../../config/http/http.config";
import { HttpService } from "../../service/http/http.service";
import { GetMoveParams, GetMoveResponse } from "./get-move.i";

export class GetMove {
  private httpConfig;
  private httpService;

  constructor() {
    this.httpConfig = new HttpConfig();
    this.httpService = new HttpService();
  }

  async get(params: GetMoveParams): Promise<GetMoveResponse> {
    const url = this.httpConfig.getConfig().bot.getMove;

    return await this.httpService
      .get(url, params)
      .then((data: GetMoveResponse) => {
        return data;
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
}
