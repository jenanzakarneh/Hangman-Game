import { letterInput } from "../types/types";
import { Box } from "@chakra-ui/react";

const Letter = ({ value }: letterInput) => {
  return (
    <Box
      w={"100px"}
      h={"100"}
      m={"20px"}
      rounded={"md"}
      fontSize={"60px"}
      shadow={"0px 0px 10px gray"}
     
    >
      {value === "_" ? " " : value}
    </Box>
  );
};

export default Letter;
