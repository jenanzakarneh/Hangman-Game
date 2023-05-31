import express from "express";
import { startNewGame,geussThisLetter } from "../controllers/game";

const router = express.Router();

router.get("/:length", startNewGame);
router.post("/geuss",geussThisLetter);

export default router;
