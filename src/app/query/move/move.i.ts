export interface GetMoveParams {
  fen: string;
  move: string;
  int: number;
}

export interface GetMoveResult {
  fen: string;
  move: string;
  isCheckmate: boolean;
  isGameOver: boolean;
}

export interface CheckValidMoveParams {
  fen: string;
  move: string;
}

export interface CheckValidMoveResult {
  fen?: string;
  isValidMove: boolean;
  isCheckmate?: boolean;
  isGameOver?: boolean;
}
