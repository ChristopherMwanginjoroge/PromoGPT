import React, { useState } from "react";
import {
  Box,
  Textarea,
  Button,
  VStack,
  Heading,
  Text,
  Spinner,
  Input,
  HStack,
} from "@chakra-ui/react";
import DashboardLayout from "../layouts/DashboardLayout";
import api from "../api";

export default function Generator() {
  const [prompt, setPrompt] = useState("");
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt && !file) return;
    setLoading(true);
    setResult("");

    try {
      const formData = new FormData();
      formData.append("prompt", prompt);
      if (file) formData.append("file", file);

      const res = await api.post("/ai/generate/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setResult(res.data.output || res.data.generated_text || "No response");
    } catch (error) {
      console.error(error);
      setResult("⚠️ Failed to generate promo content. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title="AI Promo Content Generator">
      <VStack spacing={6} align="stretch">
        <Heading size="md" color="brand.purple">
          Generate Promotional Content
        </Heading>

        <Textarea
          placeholder="Describe your product, campaign goal, or target audience..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          size="md"
          minH="150px"
        />

        <HStack>
          <Input
            type="file"
            accept="image/*,.pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <Button
            onClick={handleGenerate}
            colorScheme="purple"
            isLoading={loading}
          >
            Generate
          </Button>
        </HStack>

        <Box mt={6} p={4} bg="white" borderRadius="md" shadow="md" minH="200px">
          {loading ? (
            <Spinner color="purple.500" size="lg" />
          ) : result ? (
            <Text whiteSpace="pre-wrap">{result}</Text>
          ) : (
            <Text color="gray.400">
              Your generated promo content will appear here ✨
            </Text>
          )}
        </Box>
      </VStack>
    </DashboardLayout>
  );
}
