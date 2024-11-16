import { Routes, Route } from "react-router-dom";
import { Container, Box } from "@chakra-ui/react";
import { Header } from "./components/Header";
import { HomePage } from "./pages/homePage";
import { CreatePage } from "./pages/createPage";
import { useColorModeValue } from "./components/ui/color-mode";

function App() {
  return (
    <>
      <Header />
      <Box as={"main"} bg={useColorModeValue("#FDF7F2", "gray.800")}>
        <Container maxW={1140} minH={"100vh"}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </Container>
      </Box>
    </>
  );
}

export default App;
