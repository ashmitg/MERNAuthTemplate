import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  VStack,
  Heading,
  Text,
} from "@chakra-ui/react";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      setMessages([...messages, message]);
      setMessage("");
    }
  };

  return (
    <ChakraProvider>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Heading as="h1" mb={4}>
          Chat Room
        </Heading>
        <VStack spacing={4} width="400px">
          {messages.map((msg, index) => (
            <Box
              key={index}
              borderRadius="md"
              bg="gray.100"
              p={3}
              width="100%"
            >
              <Text>{msg}</Text>
            </Box>
          ))}
        </VStack>
        <Box width="400px" mt={4}>
          <Input
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button colorScheme="blue" mt={2} onClick={handleSendMessage}>
            Send
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default ChatPage;
