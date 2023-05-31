import React from "react";
import "../styles/endOfGame.css";
import { endOfGameInput } from "../types/types";

const EndOfGame = ({ won, lost }: endOfGameInput) => {
  return (
    <div className="result">
      <h1>{won ? "Congratulations you won the game" : "Game Over"}</h1>
    </div>
  );
};

export default EndOfGame;
