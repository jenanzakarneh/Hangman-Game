import { useEffect, useState } from "react";
import { fetchLastGame } from "../network/api";
import { Box } from "@chakra-ui/react";
import Header from "../components/Header";
import StartNewGame from "../components/StartNewGame";
import { homeInput } from "../types/types";
import Game from "../components/Game";
const Home = ({ setWon, setAuthorized }: homeInput) => {
  const [wordLength, setWordLength] = useState<string>("0");
  const [word, setWord] = useState(Array(wordLength).fill(" "));
  const [currentImage, setCurrentImage] = useState(0);
  const [error, setError] = useState("");
  const [restart, setRestart] = useState(false);
  const fetchLastActiveGame = async () => {
    const lastGame = await fetchLastGame(setError);
    if (lastGame) {
      setWordLength(lastGame.length);
      setWord(lastGame.guessed.split(""));
      setCurrentImage(lastGame.currentImage);
      setError("");
    }
  };

  useEffect(() => {
    fetchLastActiveGame();
  }, []);

  useEffect(() => {
    fetchLastActiveGame();
  }, [restart]);
  return (
    <div>
      <Header setAuthorized={setAuthorized} />
      {wordLength !== "0" ? (
        <Game
          setWon={setWon}
          setAuthorized={setAuthorized}
          gameLength={wordLength}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
          word={word}
          setWord={setWord}
        />
      ) : (
        <StartNewGame setRestart={setRestart} />
      )}
      <Box color={"red"}> {error}</Box>
    </div>
  );
};

export default Home;
