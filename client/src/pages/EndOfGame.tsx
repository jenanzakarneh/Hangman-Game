import { Flex, Box, Input, Button, Heading } from "@chakra-ui/react";
import { endOfGameInput } from "../types/types";
import { useNavigate } from "react-router";
import { fetchNewGame } from "../network/api";
import { useState, ChangeEvent } from "react";

const EndOfGame = ({ won, setAuthorized }: endOfGameInput) => {
  const navigate = useNavigate();
  const [wordLength, setWordLength] = useState("5");
  const newGameClicked = async () => {
    await fetchNewGame(parseInt(wordLength));
    navigate(`/game/${wordLength}`);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWordLength(event.target.value);
  };
  return (
    <Flex direction={"column"} align={"center"} h={"700"}justify={'space-around'} >
      <Heading fontSize={'6xl'} color={"red"}>
        {won ? "Congratulations you won the game" : "Game Over"}
      </Heading>
      <Box>
        <Button
          w={"156px"}
          color={"white"}
          bgColor={"gray"}
          onClick={newGameClicked}
          mr={"20"}
          h={"48px"}
        >
          Start New Game
        </Button>
        <label style={{ color: "gray" }} htmlFor="number-of-letters">
          Sellect Word Length
        </label>
        <Input
          border={"1px"}
          type="number"
          name="number-of-letters"
          min={"3"}
          max={"7"}
          ml={"10"}
          onChange={handleChange}
          size={"lg"}
          w={"auto"}
        ></Input>
      </Box>
      <Button
        w={"156px"}
        color={"white"}
        bgColor={"gray"}
        onClick={() => {
          setAuthorized(false);
          localStorage.clear();
          navigate("/login");
        }}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default EndOfGame;
