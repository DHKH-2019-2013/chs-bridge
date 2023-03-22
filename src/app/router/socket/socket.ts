import { Server } from "socket.io";

export class SocketServer {
  constructor(server: any) {
    const io = new Server(server);

    io.on("connection", (socket) => {
      console.log("a user connected");

      socket.on("hello from client", (...args) => {
        console.log("hello bff");
      });
    });
  }
}
