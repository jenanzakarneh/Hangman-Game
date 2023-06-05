import  { ChangeEvent, useState } from "react";
import { fetchLastGame, fetchNewGame } from "../network/api";
import { useNavigate } from "react-router";
import { Box, Button, Center, Flex, Heading, Input } from "@chakra-ui/react";
const Home = () => {
  const [wordLength, setWordLength] = useState<string>("5");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWordLength(event.target.value);
  };
  const lastGameClicked = async () => {
    const lastGameLength = await fetchLastGame(setError);
    if (lastGameLength) {
      setWordLength(lastGameLength);
      navigate(`/game/${wordLength}`);
    }
  };
  const newGameClicked = async () => {
    await fetchNewGame(parseInt(wordLength));
    navigate(`/game/${wordLength}`);
  };

  return (
    <Flex
      direction={"column"}
      p={"30px"}
      m={"50"}
      justify={"space-around"}
      h={"900"}
      color={"gray"}
    >
      <Center>
        <Heading as={"h1"}>Let's Play Hangaman</Heading>
      </Center>

      <Box textAlign={'center'}>
        <Center justifyContent={"space-around"}>
          <Button
            onClick={lastGameClicked}
            size={"lg"}
            bg={"gray"}
            color={"white"}
          >
            Your Last Game
          </Button>
          <Button
            onClick={newGameClicked}
            size={"lg"}
            bg={"gray"}
            color={"white"}
          >
            {" "}
            Start New Game
          </Button>
          <Center>
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
      </Center>
        </Center>
      </Box>
        <Box mt={'10'}  fontSize={'2xl'} color={"red"} textAlign={'center'}>
          {error}
        </Box>
    
    </Flex>
  );
};

export default Home;
