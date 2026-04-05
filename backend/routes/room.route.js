import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  createRoom,
  joinRoom,
  runCode,
  closeRoom
} from "../controllers/room.controller.js";

const router = Router();

router.route("/").post(verifyJWT, createRoom);

router.route("/room").post(joinRoom);

router.route("/room/:roomId/run").post(runCode);

router.route("/room/:roomId/close").post(verifyJWT, closeRoom);

export default router;
