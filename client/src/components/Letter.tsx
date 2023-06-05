import { letterInput } from "../types/types";
import { Box } from "@chakra-ui/react";

const Letter = ({ value }: letterInput) => {
  return (
    <Box
      w={"150px"}
      h={"150"}
      m={"20px"}
      rounded={"md"}
      fontSize={"100px"}
      shadow={"0px 0px 10px gray"}
      textAlign={"center"}
    >
      {value}
    </Box>
  );
};

export default Letter;
