import React from "react";
import { wordInput } from "../types/types";
import "../styles/word.css";
import Letter from "./Letter";

const Word = ({ length, word }: wordInput) => {
  const renderLetters = () => {
    console.log("length = ", length);
    return Array.from({ length: length }, (_, index) => (
      <Letter key={index} value={word[index]} />
    ));
  };
  return <div className="word">{renderLetters()}</div>;
};

export default Word;
