import { Server } from "socket.io";
import { LoggerService } from "../../service/logger/logger";
import { ChatParams, JoinRoomParams, RoomsDB, UpdateMoveParams } from "./socket.i";

export class SocketServer {
  private roomsDB: RoomsDB = [];
  private logger = new LoggerService();

  constructor(server: any) {
    const io = new Server(server);

    io.on("connection", (socket) => {
      socket.on("get-lobbies", () => {
        socket.emit("return-lobbies", { roomsDB: this.roomsDB });
      });

      socket.on("join-board", ({ roomId, name }: JoinRoomParams) => {
        socket.join(roomId);
        const room = this.roomsDB.find((room) => roomId === room.roomId);
        if (room) {
          if (room.players.length < 2) room.players.push({ id: socket.id, name });
          if (room.players.length === 2) {
            const moveFirst = Math.floor(Math.random() * 2);
            if (moveFirst === 0) {
              socket.to(roomId).emit("start-match", { side: true });
              socket.emit("start-match", { side: false });
            } else {
              socket.to(roomId).emit("start-match", { side: false });
              socket.emit("start-match", { side: true });
            }
          } else {
            // watcher?
          }
        } else {
          this.roomsDB.push({
            roomId: roomId,
            players: [
              {
                id: socket.id,
                name,
              },
            ],
          });
        }
      });

      socket.on("update-move", ({ roomId, fen, move, isCheckmate, promotionUnit }: UpdateMoveParams) => {
        socket.to(roomId).emit("listen-update-move", { fen, move, isCheckmate, promotionUnit });
      });

      socket.on("chat", ({ roomId, message }: ChatParams) => {
        socket.broadcast.to(roomId).emit("incoming-chat", { message });
      });

      socket.on("disconnect", () => {
        // find disconnected player room
        let playerRoomIndex = this.roomsDB.findIndex((room) => {
          return room.players.find((player) => player.id === socket.id) ? true : false;
        });
        // update player in room
        if (playerRoomIndex > -1) {
          const playerRoom = this.roomsDB[playerRoomIndex];
          playerRoom.players = playerRoom.players.filter((player) => player.id !== socket.id);
          if (playerRoom.players.length === 0 || playerRoom.players.length === 1) {
            this.roomsDB = this.roomsDB.filter((room) => room.roomId !== playerRoom?.roomId);
          }
        }
      });
    });
  }
}
