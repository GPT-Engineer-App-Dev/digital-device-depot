import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        bg="blue.700"
        color="white"
        height="60vh"
        align="center"
        justify="center"
        direction="column"
        textAlign="center"
        p={4}
      >
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Flex>

      {/* Sample Products Section */}
      <Box as="section" py={10}>
        <Heading size="xl" textAlign="center" mb={8}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text fontSize="lg" color="gray.600">$299.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text fontSize="lg" color="gray.600">$399.99</Text>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text fontSize="lg" color="gray.600">$499.99</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={6}>
        <Flex justify="space-between" align="center" direction={{ base: "column", md: "row" }} px={4}>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram size="24px" />
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;