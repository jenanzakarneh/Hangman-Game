import { InferSchemaType, Schema, model } from "mongoose";

const gameSchema = new Schema({
  length: { type: Number, required: true, min: 3, max: 7 },
  word: { type: String, required: true },
  guesses: { type: [String] },
  correctGuesses: { type: [String] },
  incorrectGuesses: { type: [String] },
  remainingGuesses: { type: Number, default: 10 },
  isActive: { type: Boolean, default: true },
  hasEnded: { type: Boolean, default: false },
  userId: { type: String },
  // active: { type: Boolean },
});

type Game = InferSchemaType<typeof gameSchema>;

export default model<Game>("game", gameSchema);
