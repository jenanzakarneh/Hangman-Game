import React from "react";
import {guessInput} from '../types/types'
import "../styles/guess.css";

const Guess = ({guess}:guessInput) => {
  return (
    <div className="guess">
    {guess}
    </div>
  );
};

export default Guess;
