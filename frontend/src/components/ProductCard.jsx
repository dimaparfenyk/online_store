import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  Container,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { toaster, Toaster } from "./ui/toaster";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";

import { useProductStore } from "../store/product";
import { useColorModeValue } from "./ui/color-mode";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);
  const [showModal, setShowModal] = useState(false);

  const { deleteProduct, updateProduct } = useProductStore();

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();

    if (!name || !price || !image) {
      return toaster.create({
        title: `Fill all fields`,
        type: "error",
      });
    }

    const updatedProduct = {
      name,
      price,
      image,
    };

    const { success, message } = await updateProduct(
      product._id,
      updatedProduct
    );

    if (success) {
      setShowModal(false);
      toaster.create({
        title: "Success",
        description: "Product updated successfully",
        type: "success",
      });
    } else {
      toaster.create({
        title: "Error",
        description: message,
        type: "error",
      });
    }
    setShowModal(false);
  };

  const handleDeleteProduct = async (id) => {
    const { success, message } = await deleteProduct(id);
    return success
      ? toaster.create({
          title: message,
          type: "success",
        })
      : toaster.create({
          title: message,
          type: "error",
        });
  };

  return (
    <>
      <Box
        shadow="lg"
        rounded="lg"
        overflow="hidden"
        transition="all 0.3s"
        bg={useColorModeValue("white", "gray.800")}
        _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          h={48}
          w="full"
          objectFit="cover"
        />

        <Box p={4}>
          <Heading as="h3" size="md" mb={2}>
            {product.name}
          </Heading>

          <Text fontWeight="bold" fontSize="xl" mb={4}>
            ${product.price}
          </Text>

          <HStack>
            <IconButton bg="#0690d4">
              <FaRegEdit onClick={() => setShowModal(true)} />
            </IconButton>
            <IconButton
              bg="#ff0000b0"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <MdDeleteOutline />
            </IconButton>
          </HStack>
        </Box>

        <Toaster />
      </Box>

      {showModal && (
        <Container
          minW="100vw"
          minH="100vh"
          pos="fixed"
          top={0}
          left={0}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bg="gray.900/80"
          zIndex={1000}
        >
          <Box
            as="form"
            maxW="480px"
            w="100%"
            p="20px"
            boxShadow="lg"
            pos="relative"
            bg="#fff"
            borderRadius="10px"
            onSubmit={handleUpdateSubmit}
          >
            <IconButton
              bg="#F59256"
              pos="absolute"
              top="10px"
              right="10px"
              css={{
                _icon: {
                  width: 6,
                  height: 6,
                  fill: "#fff",
                  stroke: "#fff",
                },
              }}
              _hover={{ bg: "#FF7043" }}
              onClick={() => setShowModal(false)}
            >
              <IoCloseOutline />
            </IconButton>
            <VStack gapY={4} maxW="480px" align="center">
              <Heading as="h2" color="gray.600">
                Update current product
              </Heading>
              <Input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                name="name"
                value={name || ""}
                placeholder="Product Name"
                type="text"
                bg="#fff"
                color="#000"
                border="1px solid #52525B"
                _hover={{ borderColor: "#FF7043" }}
                _focus={{
                  borderColor: "#F59256",
                  boxShadow: "0 0 0 1px #F59256",
                }}
              />
              <Input
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                value={price || ""}
                placeholder="Product Price"
                bg="#fff"
                color="#000"
                border="1px solid #52525B"
                _hover={{ borderColor: "#FF7043" }}
                _focus={{
                  borderColor: "#F59256",
                  boxShadow: "0 0 0 1px #F59256",
                }}
              />
              <Input
                onChange={(e) => setImage(e.target.value)}
                name="image"
                value={image || ""}
                placeholder="Product Image"
                type="text"
                bg="#fff"
                color="#000"
                border="1px solid #52525B"
                _hover={{ borderColor: "#FF7043" }}
                _focus={{
                  borderColor: "#F59256",
                  boxShadow: "0 0 0 1px #F59256",
                }}
              />

              <HStack mt="40px">
                <Button type="submit" bg="#F59256" color="white">
                  Update
                </Button>
                <Button
                  bg="#F59256"
                  color="white"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </Button>
              </HStack>
            </VStack>
          </Box>
        </Container>
      )}
    </>
  );
};
