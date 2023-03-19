import { NextFunction, Request, Response } from "express";
import { InitializeChessBoard } from "../../query/initialize-chess-board/initialize-chess-board";
import { GetInitializeChessBoardResponse } from "../../query/initialize-chess-board/initialize-chess-board.i";
import { LoggerService } from "../../service/logger/logger";
import { IntializeChessBoardResponse } from "./board.controller.i";

export class BoardController {
  private query = new InitializeChessBoard();
  private logger = new LoggerService();

  async intializeChessBoard(req: Request, res: Response): Promise<IntializeChessBoardResponse> {
    this.logger.info("Enter GET /intialize-chess-board");
    return await this.query
      .get()
      .then((response: GetInitializeChessBoardResponse) => {
        this.logger.info(`Response GET /intialize-chess-board: ${response}`);
        return res.send(response);
      })
      .catch((e) => {
        this.logger.error(`Error GET /intialize-chess-board: ${e}`);
        return res.status(500).send(e);
      });
  }
}
