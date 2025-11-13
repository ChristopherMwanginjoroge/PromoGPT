import React, { useState } from "react";
import { Box, Input, Select, Textarea, Button, Heading, VStack } from "@chakra-ui/react";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Campaign() {
  const [form, setForm] = useState({ name: "", goal: "", audience: "", details: "" });

  return (
    <DashboardLayout title="Create Campaign">
      <VStack spacing={4} align="stretch">
        <Heading size="md" color="brand.purple">New Campaign</Heading>
        <Input placeholder="Campaign Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}/>
        <Select placeholder="Select Goal" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })}>
          <option>Brand Awareness</option>
          <option>Engagement</option>
          <option>Lead Generation</option>
        </Select>
        <Input placeholder="Target Audience" value={form.audience} onChange={(e) => setForm({ ...form, audience: e.target.value })}/>
        <Textarea placeholder="Campaign Details..." value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })}/>
        <Button colorScheme="purple">Generate AI Promo Content</Button>
      </VStack>
    </DashboardLayout>
  );
}
