import express from "express";
import { BoardController } from "../../controller/board/board.controller";

const router = express.Router();
const controller = new BoardController();

router.get("/intialize-chess-board", controller.intializeChessBoard.bind(controller));

export default router;
