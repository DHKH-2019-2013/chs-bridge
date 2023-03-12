import { Response } from "express";

export type GetMoveResponse = Response<
  Record<
    any,
    {
      fen: string;
      move: string;
      isCheckmate: boolean;
    }
  >
>;
