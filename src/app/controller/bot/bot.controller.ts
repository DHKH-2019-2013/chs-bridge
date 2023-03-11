import { Request } from "express";
import { GetMove } from "../../query/get-move/get-move";
import {
  GetMoveParams,
  GetMoveResponse,
} from "../../query/get-move/get-move.i";

const query = new GetMove();

export class BotController {
  async getMove(req: Request): Promise<GetMoveResponse> {
    const params: GetMoveParams = {
      fen: req.query.fen as string,
      move: req.query.move as string,
      int: Number(req.query.int),
    };

    return await query
      .get(params)
      .then((data: GetMoveResponse) => {
        return data;
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
}
