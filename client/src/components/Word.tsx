import { wordInput } from "../types/types";
import { Flex } from "@chakra-ui/react";

import Letter from "./Letter";
import { useEffect } from "react";

const Word = ({ length, word }: wordInput) => {
  const renderLetters = () => {
    return Array.from({ length: length }, (_, index) => (
      <Letter key={index} value={word[index]} />
    ));
  };
  useEffect(() => {
    console.log("word length =", length, "word = ", word);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Flex mt={"5%"} mb={"5%"} w={"100%"} justifyContent={"center"}>
      {renderLetters()}
    </Flex>
  );
};

export default Word;
