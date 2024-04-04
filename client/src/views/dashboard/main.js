import {React, useEffect} from 'react';
import { Box, Flex, Text, Button, Divider, Grid, GridItem, Heading } from "@chakra-ui/react";
import {useNavigate} from 'react-router-dom';
import useLogout from '../../hooks/useLogOut';
import useAuth from '../../hooks/useAuth';

const MainDashboard = () => {
  const { data, loading } = {"data":{"email":"test", "user":"test"}, "loading":false};
  //const logout = useLogout();
  
  const navigate = useNavigate();
  const clicknav = () => {
    navigate('/oop')
  }
  return (
    <>
      {loading ? (
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Text>Loading...</Text>
        </Flex>
      ) : data ? (
        <Box>

          <Flex>
            <Box flex="1" p={4}>
              <Heading size="lg" mb={4}>User Profile</Heading>
              <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={6}>
                <GridItem>
                  <Text fontWeight="bold">Email:</Text>
                  <Text>{data.email}</Text>
                </GridItem>
                <GridItem>
                  <Text fontWeight="bold">Name:</Text>
                  <Text>{data.user}</Text>
                </GridItem>
                {/* Add more user profile information here */}
              </Grid>
              
              {/* Add more dashboard components such as data visualization, statistics, etc. */}
            </Box>
          </Flex>
        </Box>
      ) : (
        <Flex justifyContent="center" alignItems="center" h="100vh">
          <Text>No user data found. Please login.</Text>
        </Flex>
      )}
    </>
  );
};



export default MainDashboard;
