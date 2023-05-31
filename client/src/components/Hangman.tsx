import React from "react";
import "../styles/hangman.css";
import { hangmanInput } from "../types/types";
const Hangman = ({ currentImage }: hangmanInput) => {
  return (
    <div>
      <img src={`../assets/hangman/${currentImage}.jpg`} alt="loading" />
    </div>
  );
};

export default Hangman;
