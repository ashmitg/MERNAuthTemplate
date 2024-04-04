// Navbar.js

import React from "react";
import { Flex, Spacer, Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogOut";

const DashboardNavbar = () => {
  const logout = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <Flex p={4} bg="blue.500" color="white">
      <Heading as="h2" size="md">
        Chat App
      </Heading>
      <Spacer />
      <Link to="/dashboard">
        <Button mr={4} variant="ghost">
          Dashboard
        </Button>
      </Link>
      <Link to="/dashboard/chat">
        <Button mr={4} variant="ghost">
          Chat
        </Button>
      </Link>
      <Button onClick={handleLogout} variant="ghost">
        Logout
      </Button>
    </Flex>
  );
};

export default DashboardNavbar;
