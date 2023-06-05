import { guessInput } from "../types/types";
import { Box } from "@chakra-ui/react";

const Guess = ({ guess }: guessInput) => {
  return (
    <Box
      w={"200px"}
      h={"200"}
      rounded={"md"}
      fontSize={"150px"}
      shadow={"0px 0px 10px gray"}
      textAlign={'center'}
    >
      {guess.toLocaleUpperCase()}
    </Box>
  );
};

export default Guess;
