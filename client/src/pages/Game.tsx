import React, { useState, useEffect } from "react";
import Word from "../components/Word";
import Hangman from "../components/Hangman";
import Keybad from "../components/Keypad";
import "../styles/home.css";
import { useParams } from "react-router-dom";
import { fetchGuess } from "../network/api";
import Guess from "../components/Guess";
import { gameInput } from "../types/types";
import { useNavigate } from "react-router-dom";

const Game = ({ setWon, setLost }: gameInput) => {
  var { gameLength } = useParams();
  if (!gameLength) gameLength = "4";
  const [word, setWord] = useState(Array(gameLength).fill(" "));
  const [currentImage, setCurrentImage] = useState(0);
  const [guess, setGuess] = useState(" ");
  const navigate = useNavigate();
  const makeGuess = async (letter: string) => {
    setGuess(letter);
    try {
      const response = await fetchGuess(letter);
      console.log("game over ?", response.gameOver);
      if (response.index !== -1) {
        word[parseInt(response.index)] = response.letter;
        setWord(word);
      } else setCurrentImage(currentImage + 1);
      if (response.win) setWon(true);
      else if (response.isDone) setLost(true);
      if (response.isDone) {
        localStorage.removeItem("activeGame");
        navigate("/endOfGame");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    const pressedKey: string = event.key;
    // if (pressedKey) setGuess(pressedKey);
    console.log("key", pressedKey, " presserd");
    makeGuess(pressedKey);
  };
  useEffect(() => {
    window.addEventListener<"keydown">("keydown", handleKeyDown);
  }, []);

  return (
    <div className="home">
      <div>
        <Word length={parseInt(gameLength)} word={word} />
        <div className="horizantal-flex">
          <Hangman currentImage={currentImage} />
          <Keybad onClickKey={makeGuess} />
          <Guess guess={guess} />
        </div>
      </div>
    </div>
  );
};

export default Game;
