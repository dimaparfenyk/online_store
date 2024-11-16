import { Box, Container } from "@chakra-ui/react";
import { NavBar } from "./NavBar";
import { useColorModeValue } from "./ui/color-mode";

export const Header = () => {
  return (
    <Box as="header" py={"4"} bg={useColorModeValue("#FDF7F2", "gray.800")}>
      <Container maxW={1140}>
        <NavBar />
      </Container>
    </Box>
  );
};
