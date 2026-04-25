const roomParticipants = {};
const disconnectTimers = {};

/*
Structure:

roomParticipants = {
   roomId1: [
      {
         socketId: "abc123",
         userId: "optional",
         name: "Guest-123",
         color: "#FF5733"
      }
   ]
}
*/

export const getParticipants = (roomId) => {
  const list = roomParticipants[roomId] || [];

  return [...list].sort((a, b) => {
    if (a.isOwner) return -1;
    if (b.isOwner) return 1;
    return 0;
  });
};

export const addParticipant = (roomId, user) => {
  if (!roomParticipants[roomId]) {
    roomParticipants[roomId] = [];
  }

  const existing = roomParticipants[roomId].find(
    (p) => p.userId === user.userId
  );

  if (existing) {
    // user refreshed → update socketId
    existing.socketId = user.socketId;

    // cancel disconnect removal if pending
    if (disconnectTimers[user.userId]) {
      clearTimeout(disconnectTimers[user.userId]);
      delete disconnectTimers[user.userId];
    }

    return;
  }

  const isOwner = roomParticipants[roomId].length === 0;

  roomParticipants[roomId].push({
    ...user,
    isOwner
  });
};

export const removeParticipant = (roomId, socketId) => {
  if (!roomParticipants[roomId]) return;

  roomParticipants[roomId] = roomParticipants[roomId].filter(
    (s) => s.socketId !== socketId,
  );

  if (roomParticipants[roomId].length === 0) {
    delete roomParticipants[roomId];
  }
};

export const findParticipantRoom = (socketId) => {
  for (const roomId in roomParticipants) {
    const exists = roomParticipants[roomId].find(
      (p) => p.socketId === socketId,
    );

    if (exists) {
      return roomId;
    }
  }

  return null;
};

export const getParticipant = (roomId, socketId) => {
  if (!roomParticipants[roomId]) return null;

  return roomParticipants[roomId].find((p) => p.socketId === socketId);
};

export { disconnectTimers };
