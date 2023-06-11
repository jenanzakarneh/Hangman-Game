import React, { useState, useEffect } from "react";
import Word from "./Word";
import Hangman from "./Hangman";
import Keybad from "./Keypad";
import { fetchGuess } from "../network/api";
import Guess from "./Guess";
import { gameInput } from "../types/types";
import { useNavigate } from "react-router-dom";
import { Center, Flex } from "@chakra-ui/react";

const Game = ({
  setWon,
  setAuthorized,
  gameLength,
  currentImage,
  setCurrentImage,
  word,
  setWord,
}: gameInput) => {
  if (!gameLength) gameLength = "4";

  const [guess, setGuess] = useState(" ");
  const navigate = useNavigate();
  const makeGuess = async (letter: string) => {
    setGuess(letter);
    try {
      const response = await fetchGuess(letter);
      if (response.index !== -1) {
        var myWord = word;
        myWord[parseInt(response.index)] = response.letter;
        setWord(word);
      } else {
        setCurrentImage(response.currentImage);
      }
      if (response.isDone) {
        if (response.win) {
          setWon(true);
        } else {
          setWon(false);
        }
        navigate("/endOfGame");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    const pressedKey: string = event.key;
    makeGuess(pressedKey);
  };

  useEffect(() => {
    window.addEventListener<"keydown">("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex direction={"column"}>
      <Word length={parseInt(gameLength)} word={word} />
      <Flex justify={"space-between"} pl={"20"} pr={"20"} pb={"10"}>
        <Hangman currentImage={currentImage} />
        <Center>
          <Guess guess={guess} />
        </Center>
        <Keybad onClickKey={makeGuess} />
      </Flex>
    </Flex>
  );
};

export default Game;
