import { Flex, Heading } from "@chakra-ui/react";
import { endOfGameInput } from "../types/types";
import StartNewGame from "../components/StartNewGame";
import Header from "../components/Header";

const EndOfGame = ({ won, setAuthorized }: endOfGameInput) => {
  return (
    <div>
      <Header setAuthorized={setAuthorized} />
      <Flex direction={"column"} h={"700"} justify={"space-around"}>
        <Heading fontSize={"6xl"} color={"red"} >
          {won ? "Congratulations you won the game" : "Game Over"}
        </Heading>
        <StartNewGame />
      </Flex>
    </div>
  );
};

export default EndOfGame;
