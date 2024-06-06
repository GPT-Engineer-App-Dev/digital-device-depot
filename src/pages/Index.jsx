import { Box, Button, Container, Flex, Heading, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$699", image: "/images/smartphone.jpg" },
  { id: 2, name: "Laptop", price: "$999", image: "/images/laptop.jpg" },
  { id: 3, name: "Headphones", price: "$199", image: "/images/headphones.jpg" },
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex gap={4}>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
      </Flex>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Image src="/images/hero-image.jpg" alt="Electronics" mx="auto" mb={8} />
        <Heading as="h1" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={8}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="blue" size="lg">Shop Now</Button>
      </Box>

      {/* Sample Products */}
      <Box as="section" py={20}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          {sampleProducts.map(product => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading as="h3" size="md" mb={2}>{product.name}</Heading>
                <Text fontSize="lg" color="blue.600">{product.price}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} textAlign="center">
        <Flex justifyContent="center" mb={4}>
          <Link href="https://facebook.com" isExternal mx={2}><FaFacebook size="24px" /></Link>
          <Link href="https://twitter.com" isExternal mx={2}><FaTwitter size="24px" /></Link>
          <Link href="https://instagram.com" isExternal mx={2}><FaInstagram size="24px" /></Link>
        </Flex>
        <Text>&copy; {new Date().getFullYear()} ElectroShop. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;