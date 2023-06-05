import express from "express";
import { startNewGame,geussThisLetter, getActiveGame } from "../controllers/game";
import passport from'passport'
import '../passport'
const router = express.Router();

router.get("/create/:length",passport.authenticate("jwt", { session: false }), startNewGame);
router.post("/geuss",passport.authenticate("jwt", { session: false }),geussThisLetter);
router.get('/activeGame',passport.authenticate('jwt',{session:false}),getActiveGame)

export default router;
