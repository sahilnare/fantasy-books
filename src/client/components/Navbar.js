import React, { Component } from 'react';
import { Box, Text, Flex } from 'rebass';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
      <Flex
        px={2}
        color='white'
        bg='black'
        alignItems='center'>
        <Text p={3} fontSize={4} fontWeight='bold'>Fantasy Books</Text>
        <Box mx='auto' />
        <Link to='/' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Home</Text>
        </Link>
        <Link to='/about' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>About</Text>
        </Link>
        <Link to='/asoiaf' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>ASOIAF</Text>
        </Link>
      </Flex>
    );
}

export default Navbar;
