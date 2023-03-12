export interface GetMoveResponse {
  fen: string;
  move: string;
  isCheckmate: boolean;
}

export interface GetMoveParams {
  fen: string;
  move: string;
  int: number;
}
