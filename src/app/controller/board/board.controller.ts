import { Request } from "express";
import { InitializeChessBoard } from "../../query/initialize-chess-board/initialize-chess-board";

const query = new InitializeChessBoard();

export class BoardController {
  async intializeChessBoard(): Promise<string> {
    return await query
      .get()
      .then((data: string) => {
        return data;
      })
      .catch((e) => {
        throw new Error(e);
      });
  }
}
