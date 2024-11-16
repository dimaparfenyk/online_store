import { Flex, Text, HStack, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

import { ColorModeButton } from "./ui/color-mode";

export const NavBar = () => {
  return (
    <Flex
      justify={"space-between"}
      align={"center"}
      flexDir={{ base: "column", sm: "row" }}
    >
      <Text
        textAlign={"center"}
        fontSize={{ base: 22, sm: 28 }}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        color={{ base: "teal.500", _hover: "teal.600" }}
      >
        <Link to={"/"}>Product Store 🛒</Link>
      </Text>

      <Flex gapX={4}>
        <HStack spacing={2} alignItems={"center"}>
          <ColorModeButton
            bg={{ base: "#F59256", _dark: "white" }}
            _hover={{ bg: "#FF7043" }}
          />
          <Link to={"/create"}>
            <IconButton
              bg={{ base: "#F59256", _dark: "white" }}
              w={12}
              h={12}
              px={4}
              _hover={{ bg: "#FF7043" }}
              css={{
                _icon: {
                  width: "5",
                  height: "5",
                  fill: { base: "#fff", _dark: "gray.600" },
                  stroke: { base: "#fff", _dark: "gray.600" },
                },
              }}
            >
              <FaPlus />
            </IconButton>
          </Link>
        </HStack>
      </Flex>
    </Flex>
  );
};
