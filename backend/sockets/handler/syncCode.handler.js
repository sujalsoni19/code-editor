const syncCode = (socket, io) => {
  socket.on("sync-code", ({ code, socketId }) => {
    io.to(socketId).emit("sync-code", { code });
    console.log("sync code event received with code: ", code);
  });
};

export default syncCode;
