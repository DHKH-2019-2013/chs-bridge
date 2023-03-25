export type RoomsDB = Array<{
  roomId: string;
  players: Array<{
    id: string;
    name: string;
    isReady: boolean;
  }>;
}>;

export interface JoinRoomParams {
  roomId: string;
  name: string;
}
