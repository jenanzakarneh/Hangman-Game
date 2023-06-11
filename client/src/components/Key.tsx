import { keyInput } from "../types/types";
import { Box, Center } from "@chakra-ui/react";
const Key = ({ letter, onClickKey }: keyInput) => {
  const clicked = () => {
    onClickKey(letter.toLowerCase());
  };
  return (
    <Box
      onClick={clicked}
      w={"50px"}
      h={"50px"}
      rounded={"md"}
      backgroundColor={"white"}
      color={"gray"}
      mr={'3'}
      pt={"3"}
      shadow={"0px 0px 5px gray"}
    >
      <Center>{letter}</Center>
    </Box>
  );
};

export default Key;
