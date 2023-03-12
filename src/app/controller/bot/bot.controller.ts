import { Request, Response } from "express";
import { GetMove } from "../../query/move/move";
import { GetMoveParams, GetMoveResult } from "../../query/move/move.i";
import { LoggerService } from "../../service/logger/logger";
import { GetMoveResponse } from "./bot.controller.i";

export class BotController {
  private query = new GetMove();
  private logger = new LoggerService();

  async getMove(req: Request, res: Response): Promise<GetMoveResponse> {
    this.logger.info("Enter GET /move");

    const params: GetMoveParams = {
      fen: req.query.fen as string,
      move: req.query.move as string,
      int: Number(req.query.int),
    };

    return await this.query
      .get(params)
      .then((response: GetMoveResult) => {
        this.logger.info(`Response GET /move: ${response}`);
        return res.send(response);
      })
      .catch((e) => {
        this.logger.error(`Error GET /move: ${e}`);
        if (e.message.search("invalidMove")) return res.status(400).send(e.message);
        return res.status(500).send(e);
      });
  }
}
