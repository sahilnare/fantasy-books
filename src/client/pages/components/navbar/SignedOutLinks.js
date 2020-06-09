import React, { Component } from 'react';
import { Text, Image } from 'rebass';
import { Link } from 'react-router-dom';

const SignedOutLinks = () => {
    return (
      <React.Fragment>
        <Link to='/' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Home</Text>
        </Link>
        <Link to='/about' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>About</Text>
        </Link>
        <Link to='/posts' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Posts</Text>
        </Link>
        <Link to='/search' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Search</Text>
        </Link>
        <Link to='/login' style={{textDecoration: 'none'}} >
          <Text p={3} fontSize={2} fontWeight='bold' color='white' sx={{textDecoration: 'none'}}>Log In</Text>
        </Link>
      </React.Fragment>
    );
}

export default SignedOutLinks;
