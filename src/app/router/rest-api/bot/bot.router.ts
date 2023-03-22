import express from "express";
import { BotController } from "../../../controller/bot/bot.controller";
import { guard, isValid } from "./bot.guard";

const router = express.Router();
const controller = new BotController();

router.get("/move", guard(), isValid, controller.getMove.bind(controller));
router.get("/check-valid-move", controller.checkValidMove.bind(controller));

export default router;
