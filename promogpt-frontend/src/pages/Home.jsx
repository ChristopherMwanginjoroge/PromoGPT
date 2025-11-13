import React from "react";
import { Box, Heading, Text, Button, VStack, Image } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Box textAlign="center" py={20} px={6} bgGradient="linear(to-b, white, purple.50)">
      <VStack spacing={6}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png"
          alt="PromoGPT Logo"
          boxSize="100px"
        />
        <Heading size="2xl" color="brand.purple">
          Welcome to PromoGPT 🚀
        </Heading>
        <Text fontSize="lg" maxW="600px">
          Generate AI-powered promotional content, track your performance, and grow your brand with ease.
        </Text>
        <Button colorScheme="purple" size="lg" onClick={() => navigate("/signup")}>
          Get Started
        </Button>
      </VStack>
    </Box>
  );
}
