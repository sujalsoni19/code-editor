import { findParticipantRoom } from "../../memory/roomParticipants.js";

const codeChange = (socket) => {
  socket.on("code-change", ({ code }) => {
    const roomId = findParticipantRoom(socket.id);

    if (!roomId) {
      return;
    }
    socket.to(roomId).emit("code-change", { code, socketId: socket.id });
  });
};

export default codeChange;
