import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  IconButton,
  Flex,
  Badge,
} from "@chakra-ui/react";
import { FiCopy, FiEdit2, FiTrash2 } from "react-icons/fi";

const SavedPosts = () => {
  // Example mock data (replace later with real data from your backend)
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Black Friday Promo",
      content:
        "Get 50% off all electronics this weekend only! #BlackFriday #PromoGPT",
      date: "2025-11-01",
      status: "Published",
    },
    {
      id: 2,
      title: "New Product Launch",
      content:
        "Introducing our latest eco-friendly water bottle — stylish, durable, and sustainable! 🌿",
      date: "2025-10-28",
      status: "Draft",
    },
  ]);

  const toast = useToast();

  // Copy post content
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Post content copied to clipboard.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  // Delete post
  const handleDelete = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
    toast({
      title: "Post deleted.",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <Heading mb={6} color="brand.600">
        Saved Posts
      </Heading>
      <Text mb={8} color="gray.600">
        Review, edit, or reuse your generated promotional content.
      </Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {posts.map((post) => (
          <Card
            key={post.id}
            borderWidth="1px"
            borderRadius="xl"
            boxShadow="md"
            bg="white"
            _hover={{ transform: "scale(1.02)", transition: "0.2s" }}
          >
            <CardHeader>
              <Flex justify="space-between" align="center">
                <Heading fontSize="lg" color="brand.700">
                  {post.title}
                </Heading>
                <Badge
                  colorScheme={
                    post.status === "Published" ? "green" : "yellow"
                  }
                >
                  {post.status}
                </Badge>
              </Flex>
              <Text fontSize="sm" color="gray.500" mt={1}>
                {new Date(post.date).toLocaleDateString()}
              </Text>
            </CardHeader>

            <CardBody>
              <Text color="gray.700">{post.content}</Text>
            </CardBody>

            <CardFooter justify="flex-end">
              <IconButton
                icon={<FiCopy />}
                size="sm"
                variant="ghost"
                colorScheme="purple"
                aria-label="Copy"
                mr={2}
                onClick={() => handleCopy(post.content)}
              />
              <IconButton
                icon={<FiEdit2 />}
                size="sm"
                variant="ghost"
                colorScheme="gold"
                aria-label="Edit"
                mr={2}
                onClick={() =>
                  toast({
                    title: "Edit feature coming soon!",
                    status: "info",
                    duration: 2000,
                  })
                }
              />
              <IconButton
                icon={<FiTrash2 />}
                size="sm"
                variant="ghost"
                colorScheme="red"
                aria-label="Delete"
                onClick={() => handleDelete(post.id)}
              />
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>

      {posts.length === 0 && (
        <Box textAlign="center" mt={20}>
          <Heading size="md" color="gray.600">
            No saved posts yet.
          </Heading>
          <Text mt={2} color="gray.500">
            Generate a campaign to see your saved posts appear here.
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default SavedPosts;
