import { RequestHandler } from "express";
import { generateWordWithLength } from "../network/word";
import GameModel from "../models/game";
import createHttpError from "http-errors";
import idFromTokenUtils from "../utilities/idFromTokenUtils";
import { checkLetterIndex } from "../utilities/wordUtils";

export const startNewGame: RequestHandler = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    const token = header?.split(" ")[1];
    const userId = idFromTokenUtils(token);
    console.log("userId = ", userId);
    const wordLength = req.params.length;
    if (!parseInt(wordLength))
      throw createHttpError(
        "400",
        "Word length should be specified as a number in the request as url param"
      );
    const word = await generateWordWithLength(parseInt(wordLength));
    await GameModel.updateOne(
      { userId: userId, isActive: true },
      { isActive: false }
    );

    const newGame = await GameModel.create({
      length: wordLength,
      word: word,
      userId: userId,
    });
    res.status(201).json({ ok: true, gameId: newGame._id });
  } catch (error) {
    next(error);
  }
};
export const geussThisLetter: RequestHandler = async (req, res, next) => {
  const { letter } = req.body;
  const header = req.headers.authorization;
  const token = header?.split(" ")[1];
  const userId = idFromTokenUtils(token);
  try {
    const game = await GameModel.findOne({
      userId: userId,
      isActive: true,
    });
    if (!game) throw createHttpError(404, "Game not found");

    if (!game.isActive)
      throw createHttpError(410, "This game has reached its end ");
    const index = checkLetterIndex(game, letter);
    let win = false;
    if (index === -1) {
      game.incorrectGuesses.push(letter);
      game.remainingGuesses = game.remainingGuesses - 1;
      game.isActive = !(game.remainingGuesses === 0);
    } else {
      game.correctGuesses.push(letter);
      if (game.correctGuesses.length === game.length) {
        win = true;
        game.isActive = false;
      }
    }
    game.guesses.push(letter);

    const gameAfterGuess = await game.save();
    res.status(200).json({
      index: index,
      letter: letter,
      win: win,
      isDone: !gameAfterGuess.isActive,
    });
  } catch (error) {
    next(error);
  }
};
export const getActiveGame: RequestHandler = async (req, res, next) => {
  const header = req.headers.authorization;
  const token = header?.split(" ")[1];
  const userId = idFromTokenUtils(token);
  try {
    const activeGame = await GameModel.findOneAndUpdate({
      userId: userId,
      isActive: true,
      remainingGuesses: 10,
      guesses: [],
      incorrectGuesses: [],
      correctGuesses: [],
    });
    if (!activeGame) throw createHttpError("404", "You do not have any active game.");
    res.status(200).json({ length: activeGame?.length });
  } catch (error) {
    next(error);
  }
};
