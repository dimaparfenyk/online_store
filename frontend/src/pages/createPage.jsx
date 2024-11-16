import { Container, Heading } from "@chakra-ui/react";
import { Form } from "../components/Form";

export const CreatePage = () => {
  return (
    <Container>
      <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
        Create new Product
      </Heading>
      <Form />
    </Container>
  );
};
