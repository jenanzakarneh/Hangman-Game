import express from "express";
import { startNewGame,geussThisLetter } from "../controllers/game";
import passport from'passport'
import '../passport'
const router = express.Router();

router.get("/:length",passport.authenticate("jwt", { session: false }), startNewGame);
router.post("/geuss",passport.authenticate("jwt", { session: false }),geussThisLetter);

export default router;
