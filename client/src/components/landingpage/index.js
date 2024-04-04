import {React, useEffect} from 'react';
import { Flex, Heading, Text, Button, Box, Grid, GridItem, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link
import { useNavigate } from 'react-router-dom';


const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      padding={8}
    >



      {/* Main Content */}
      <Flex flex="1" justifyContent="center" alignItems="center" flexDirection="column">
        <Heading size="2xl" textAlign="center" mb={6}>
          Welcome
        </Heading>
        <Text fontSize="xl" textAlign="center" mb={8}>
          Your trusted platform
        </Text>
        <Button colorScheme="blue" size="lg" mb={8}>
          Get Started
        </Button>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem colSpan={1}>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Image src="https://via.placeholder.com/150" alt="Practice Questions" mb={4} />
              <Heading size="lg" mb={4}>Practice Questions</Heading>
              <Text fontSize="md">
                Bla bla bla
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Image src="https://via.placeholder.com/150" alt="Study Materials" mb={4} />
              <Heading size="lg" mb={4}>Study Materials</Heading>
              <Text fontSize="md">
                bla bla bla
              </Text>
            </Box>
          </GridItem>
          <GridItem colSpan={1}>
            <Box p={4} borderWidth="1px" borderRadius="lg">
              <Image src="https://via.placeholder.com/150" alt="Mock Exams" mb={4} />
              <Heading size="lg" mb={4}>Mock Exams</Heading>
              <Text fontSize="md">
                bla bla bla
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
