import { RequestHandler } from "express";
import { generateWordWithLength } from "../network/word";
import GameModel from "../models/game";
import createHttpError from "http-errors";
import idFromTokenUtils from "../utilities/idFromTokenUtils";

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
  const { letter, id } = req.body;
  try {
    const game = await GameModel.findById(id).exec();
    if (!game) throw createHttpError(404, "Game not found");
    if (!game.isActive)
      throw createHttpError(410, "This game has reached its end ");
    let word = game.word;
    game.correctGuesses.forEach((g) => {
      word = word.replace(g, "0");
    });
    const index = word.indexOf(letter);
    if (index === -1) {
      game.incorrectGuesses.push(letter);
      game.remainingGuesses--;
    } else game.correctGuesses.push(letter);
    game.guesses.push(letter);
    if (game.remainingGuesses === -1) {
      game.remainingGuesses = 0;
      game.isActive = false;
    }
    if (game.correctGuesses.length === word.length) {
      game.isActive = false;
    }
    const win = game.correctGuesses.length === word.length;
    const gameAfterGuess = await game.save();

    res.status(200).json({
      ok: true,
      letter: letter,
      index: index,
      win: win,
      isDone: !(gameAfterGuess.isActive),
    });
  } catch (error) {
    next(error);
  }
};
