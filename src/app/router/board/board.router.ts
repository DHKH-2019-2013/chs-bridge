import express, { Request, Response } from "express";
import { BoardController } from "../../controller/board/board.controller";

const router = express.Router();
const controller = new BoardController();

router.get(
  "/intialize-chess-board",
  async function (req: Request, res: Response) {
    try {
      const response: string = await controller.intializeChessBoard();
      return res.send(response);
    } catch (e: any) {
      return res.status(500).send(e);
    }
  }
);

export default router;
