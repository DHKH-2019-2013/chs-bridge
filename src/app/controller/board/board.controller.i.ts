import { Response } from "express";
import { GetInitializeChessBoardResponse } from "../../query/initialize-chess-board/initialize-chess-board.i";

export type IntializeChessBoardResponse = Response<Record<string, GetInitializeChessBoardResponse>>;
