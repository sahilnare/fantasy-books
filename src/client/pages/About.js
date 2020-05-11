import React, { Component } from 'react';
import { Box, Card, Image, Heading, Text, Flex } from 'rebass';
import Navbar from '../components/Navbar';

const About = () => {
    return (
      <React.Fragment>
        <Navbar />
        <Box className="homepage">
          <Box width={['80%', '65%', 1/2]} my={4} mx='auto' >
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
              }}>
                <Box p={4} width={1/2} mx='auto'>
                  <Heading as='h1'>
                    We are F-Society!
                  </Heading>
                  <Text fontSize={2} my={3}>
                    Behold!
                  </Text>
                </Box>
            </Card>
          </Box>
        </Box>
      </React.Fragment>
    );
}

export default About;
