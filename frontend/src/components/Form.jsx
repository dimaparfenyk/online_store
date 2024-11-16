import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useColorModeValue } from "./ui/color-mode";
import { Toaster, toaster } from "./ui/toaster";
import { useState } from "react";
import { useProductStore } from "../store/product";

export const Form = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const { createProduct } = useProductStore();

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "price":
        setPrice(value);
        break;

      case "image":
        setImage(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !price || !image) {
      return toaster.create({
        title: `Fill all fields`,
        type: "error",
      });
    }
    const newProduct = { name, price, image };
    await createProduct(newProduct);
    toaster.create({
      title: `New product created`,
      type: "success",
    });
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <>
      <Box
        as={"form"}
        bg={useColorModeValue("#fff", "gray.800")}
        w={"full"}
        p={6}
        rounded={"lg"}
        shadow={"md"}
        onSubmit={handleSubmit}
      >
        <VStack gapY={4}>
          <Input
            onChange={handleChange}
            name="name"
            value={name || ""}
            placeholder="Product Name"
            type="text"
            bg={useColorModeValue("#fff", "gray.700")}
          />
          <Input
            onChange={handleChange}
            name="price"
            value={price || ""}
            placeholder="Product Price"
            bg={useColorModeValue("#fff", "gray.700")}
          />
          <Input
            onChange={handleChange}
            name="image"
            value={image || ""}
            placeholder="Product Image"
            type="text"
            bg={useColorModeValue("#fff", "gray.700")}
          />

          <Button
            type="submit"
            w="full"
            bg={useColorModeValue("#F59256", "#fff")}
            color={useColorModeValue("white", "gray.600")}
            _hover={{ bg: "#FF7043" }}
          >
            Submit
          </Button>
        </VStack>
      </Box>
      <Toaster />
    </>
  );
};
