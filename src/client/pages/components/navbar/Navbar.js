import React, { Component } from 'react';
import { Box, Text, Flex, Image } from 'rebass';
import { Link } from 'react-router-dom';
import Avatar from '../../../assets/img/wizard.png';

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
        <Link to='/search' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Search</Text>
        </Link>
        <Link>
          <Image
            src={Avatar}
            sx={{
              width: 36,
              height: 36,
              borderRadius: 9999,
              backgroundColor: 'white'
            }}
            mx={3}
          />
        </Link>
      </Flex>
    );
}

export default Navbar;
