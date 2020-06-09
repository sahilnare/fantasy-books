import React, { Component } from 'react';
import { Box, Text, Flex } from 'rebass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = (props) => {
    console.log(props.auth);
    const links = props.auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return (
      <Flex
        px={2}
        color='white'
        bg='black'
        alignItems='center'>
        <Text p={3} fontSize={4} fontWeight='bold'>Fantasy Books</Text>
        <Box mx='auto' />
        { links }
      </Flex>
    );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);
