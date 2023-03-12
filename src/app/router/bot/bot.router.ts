import express, { Request, Response } from "express";
import { BotController } from "../../controller/bot/bot.controller";
import { GetMoveResponse } from "../../query/move/move.i";
import { guard, isValid } from "./bot.guard";

const router = express.Router();
const controller = new BotController();

router.get(
  "/move",
  guard(),
  isValid,
  async function (req: Request, res: Response) {
    try {
      const response: GetMoveResponse = await controller.getMove(req);
      return res.send(response);
    } catch (e: any) {
      if (e.message.search("invalidMove"))
        return res.status(400).send(e.message);
      return res.status(500).send(e);
    }
  }
);

export default router;
