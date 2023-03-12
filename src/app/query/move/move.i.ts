export interface GetMoveResult {
  fen: string;
  move: string;
  isCheckmate: boolean;
}

export interface GetMoveParams {
  fen: string;
  move: string;
  int: number;
}
