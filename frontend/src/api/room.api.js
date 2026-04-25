import api from "./axios.js";

export const createRoom = () =>
    api.post("/api/v1/rooms");

export const joinRoom = (roomId) =>
    api.post("/api/v1/rooms/room", {roomId});