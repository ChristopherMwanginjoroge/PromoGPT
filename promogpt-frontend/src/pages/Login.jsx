import React, { useState } from "react";
import { Box, Input, Button, Heading, VStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import api from "../api";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/users/login/", form);
      const user = res.data.user || res.data;
      const access = res.data.access || res.data.token;
      login(user, access);
      navigate("/dashboard");
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center" minH="100vh" bg="gray.50">
      <VStack spacing={4} p={8} bg="white" borderRadius="md" shadow="md" w="sm">
        <Heading color="brand.purple">Login</Heading>
        {error && <Text color="red.500">{error}</Text>}
        <Input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}/>
        <Input placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })}/>
        <Button colorScheme="purple" w="full" onClick={handleSubmit}>Login</Button>
        <Text fontSize="sm">Don’t have an account? <Button variant="link" onClick={() => navigate("/signup")}>Sign up</Button></Text>
      </VStack>
    </Box>
  );
}

