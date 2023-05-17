export type RoomsDB = Array<{
  roomId: string;
  players: Array<{
    id: string;
    name: string;
  }>;
}>;

export interface JoinRoomParams {
  roomId: string;
  name: string;
}

export interface UpdateMoveParams {
  roomId: string;
  fen: string;
  move: string;
  isCheckmate: boolean;
  promotionUnit?: string;
  enPassant?: Object;
}

export interface ChatParams {
  roomId: string;
  message: string;
}
