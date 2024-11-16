import { Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect } from "react";
import { ProductCard } from "../components/ProductCard";

export const HomePage = () => {
  const { getAll, products } = useProductStore();

  useEffect(() => {
    getAll();
  }, [getAll]);

  console.log("products", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack gapY={8}>
        <Heading
          as={"h1"}
          fontSize={30}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Current Products 🚀{" "}
        </Heading>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          gap={4}
        >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {products.length === 0 && (
          <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found 😢{" "}
            <Link to={"/create"}>
              <Text
                as="span"
                color="blue.500"
                _hover={{ textDecoration: "underline" }}
              >
                Create a product
              </Text>
            </Link>
          </Text>
        )}
      </VStack>
    </Container>
  );
};
