import { Flex, Box, Center, Button, useRadio } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { headerInput } from "../types/types";
const Header = ({ setAuthorized }: headerInput) => {
  const navigate = useNavigate();
  const [letter, setLetter] = useState("");
  const logout = () => {
    setAuthorized(false);
    localStorage.clear();
    navigate("/login");
  };
  useEffect(() => {
    const user = localStorage.getItem("letter");
    if (user) setLetter(user);
  }, []);
  return (
    <Flex
      h={"70"}
      bgColor={"black"}
      justify={"space-between"}
      align={"center"}
      p={"30"}
    >
      <Logo />

      <Flex w={"100px"} justify={"space-between"} align={"center"}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<TriangleDownIcon color={"white"} />}
            variant="outline"
          />
          <MenuList>
            <MenuItem onClick={logout}>Logout</MenuItem>
          </MenuList>
        </Menu>
        <Box
          w="50px"
          h="50px"
          borderRadius="50%"
          bg="white"
          color={"gray"}
          justifyContent={"center"}
        >
          <Center fontSize={"2xl"} fontWeight={"bold"} mt={"1"}>
            {letter ? letter.charAt(0).toUpperCase() : "User"}
          </Center>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Header;
