import { Flex, Button, Select } from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";
import { fetchNewGame } from "../network/api";
import { useNavigate } from "react-router";
import { startNewGameInput } from "../types/types";

const StartNewGame = ({ setRestart }: startNewGameInput) => {
  const [wordLength, setWordLength] = useState("5");
  const navigate = useNavigate();

  const newGameClicked = async () => {
    await fetchNewGame(parseInt(wordLength));
    if (setRestart) setRestart(true);
    navigate("/home");
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setWordLength(event.target.value);
  };
  return (
    <Flex m={"150"} justify={"space-around"}>
      <Button
        w={"184px"}
        h={"48px"}
        onClick={newGameClicked}
        bg={"gray"}
        color={"white"}
      >
        Start New Game
      </Button>

      <Select
        w={"184px"}
        h={"48px"}
        placeholder="Select Word Length"
        onChange={handleChange}
      >
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </Select>
    </Flex>
  );
};

export default StartNewGame;
