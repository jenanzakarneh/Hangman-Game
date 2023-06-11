import { guessInput } from "../types/types";
import { Box } from "@chakra-ui/react";

const Guess = ({ guess }: guessInput) => {
  return (
    <Box
      w={"150px"}
      h={"250"}
      rounded={"md"}
      fontSize={"150px"}
      shadow={"0px 0px 10px gray"}
    >
      {guess.toLocaleUpperCase()}
    </Box>
  );
};

export default Guess;
