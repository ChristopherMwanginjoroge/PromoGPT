import React from "react";
import { SimpleGrid, VStack, Text, Button, Image } from "@chakra-ui/react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Products() {
  const products = [
    { id: 1, name: "Leather Wallet", price: "KES 1,800", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Perfume Set", price: "KES 3,200", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Sneakers", price: "KES 5,500", image: "https://via.placeholder.com/150" },
  ];

  return (
    <DashboardLayout title="Products">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
        {products.map((p) => (
          <VStack key={p.id} bg="white" p={4} borderRadius="md" shadow="md">
            <Image src={p.image} borderRadius="md" />
            <Text fontWeight="600">{p.name}</Text>
            <Text color="brand.purple">{p.price}</Text>
            <Button colorScheme="gold">Edit</Button>
          </VStack>
        ))}
      </SimpleGrid>
    </DashboardLayout>
  );
}
