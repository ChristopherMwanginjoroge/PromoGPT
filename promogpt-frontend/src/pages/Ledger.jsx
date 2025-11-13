import React from "react";
import { Input, Heading, Divider, Button, VStack } from "@chakra-ui/react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Ledger() {
  return (
    <DashboardLayout title="User Ledger">
      <VStack align="stretch" spacing={4}>
        <Heading size="md">Product Data</Heading>
        <Input placeholder="Product Name" />
        <Input placeholder="Category" />
        <Input placeholder="Cost Price" />
        <Input placeholder="Selling Price" />
        <Divider />
        <Heading size="md">Sales Data</Heading>
        <Input placeholder="Units Sold" />
        <Input placeholder="Revenue" />
        <Button colorScheme="purple">Save Entry</Button>
      </VStack>
    </DashboardLayout>
  );
}
