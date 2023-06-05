import React, { useState, useEffect } from "react";
import Word from "../components/Word";
import Hangman from "../components/Hangman";
import Keybad from "../components/Keypad";
import { useParams } from "react-router-dom";
import { fetchGuess } from "../network/api";
import Guess from "../components/Guess";
import { gameInput } from "../types/types";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex } from "@chakra-ui/react";

const Game = ({ setWon, setAuthorized }: gameInput) => {
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
      if (response.index !== -1) {
        word[parseInt(response.index)] = response.letter;
        setWord(word);
      } else {
        setCurrentImage(currentImage + 1);
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
      <Flex justify={"space-around"} p={"20"}>
        <Hangman currentImage={currentImage} />
        <Keybad onClickKey={makeGuess} />
        <Box >
          <Guess guess={guess} />
          <Button
          mt={'250px'}
          bgColor={'white'}
          border={'1px'}
          w={'150'}
          color={'gray'}
            onClick={() => {
              setAuthorized(false);
              localStorage.clear();
              navigate("/login");
            }}
          >
            Logout
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Game;
