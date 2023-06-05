
import { wordInput } from "../types/types";
import { Flex} from "@chakra-ui/react";

import Letter from "./Letter";

const Word = ({ length, word }: wordInput) => {
  const renderLetters = () => {
    return Array.from({ length: length }, (_, index) => (
      <Letter key={index} value={word[index]} />
    ));
  };
  return <Flex
  w={'100%'}
  justifyContent={'center'}
  >{renderLetters()}</Flex>;
};

export default Word;
