import React from "react";
import {
  Box,
  VStack,
  IconButton,
  Tooltip,
  useColorModeValue,
  Text,
  HStack,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import {
  FiHome,
  FiBarChart2,
  FiPackage,
  FiBook,
  FiCpu,
  FiUser,
  FiHelpCircle,
} from "react-icons/fi";

export default function Sidebar() {
  const location = useLocation();

  // Sidebar items
  const navItems = [
    { label: "Dashboard", icon: FiHome, path: "/dashboard" },
    { label: "Campaigns", icon: FiBarChart2, path: "/campaigns" },
    { label: "Products", icon: FiPackage, path: "/products" },
    { label: "Ledger", icon: FiBook, path: "/ledger" },
    { label: "Generator", icon: FiCpu, path: "/generator" },
    { label: "Profile", icon: FiUser, path: "/profile" },
    { label: "Support", icon: FiHelpCircle, path: "/support" },
  ];

  const sidebarBg = useColorModeValue("purple.700", "purple.900");
  const activeBg = useColorModeValue("gold.400", "yellow.500");
  const iconColor = useColorModeValue("white", "gray.100");

  return (
    <Box
      as="nav"
      bg={sidebarBg}
      color={iconColor}
      h="100vh"
      w={{ base: "70px", md: "80px" }}
      position="fixed"
      left="0"
      top="0"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      boxShadow="xl"
      zIndex="10"
      _hover={{ w: "220px", transition: "0.3s ease" }}
    >
      <VStack spacing={4} mt={6} align="stretch" px={3}>
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Tooltip
              label={item.label}
              placement="right"
              hasArrow
              bg="gold.400"
              color="black"
              key={item.path}
            >
              <NavLink to={item.path}>
                <HStack
                  spacing={3}
                  p={3}
                  borderRadius="md"
                  bg={isActive ? activeBg : "transparent"}
                  _hover={{ bg: "purple.600" }}
                  transition="0.2s ease"
                >
                  <IconButton
                    icon={<item.icon size={20} />}
                    variant="ghost"
                    colorScheme="whiteAlpha"
                    aria-label={item.label}
                    _hover={{ bg: "transparent" }}
                  />
                  <Text
                    fontWeight={isActive ? "bold" : "medium"}
                    color={isActive ? "black" : "white"}
                    display={{ base: "none", md: "block" }}
                  >
                    {item.label}
                  </Text>
                </HStack>
              </NavLink>
            </Tooltip>
          );
        })}
      </VStack>

      <Box textAlign="center" pb={4}>
        <Text fontSize="xs" color="gray.200">
          © 2025 PromoGPT
        </Text>
      </Box>
    </Box>
  );
}
