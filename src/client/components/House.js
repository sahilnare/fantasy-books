import React, { Component } from 'react';
import { Box, Card, Heading, Text, Flex } from 'rebass';
import Navbar from './Navbar';
import axios from 'axios';

class House extends Component {
  constructor() {
    super();
    this.state = {
      house: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.house_id;
    axios.get('https://www.anapioficeandfire.com/api/houses/' + id)
      .then(res => {
        this.setState({house: res.data});
      })
  }

  render() {
    const house = this.state.house ? (
      <Card
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
        <Heading as='h1' fontSize={5} my={2}>
          {this.state.house.name}
        </Heading>
        <Text fontSize={4} mt={2} mb={2}>
          Region: {this.state.house.region}
        </Text>
        <Text fontSize={4} mt={2} mb={2}>
          Coat of arms: {this.state.house.coatOfArms}
        </Text>
        <Text fontSize={4} mt={2} mb={2}>
          Words: {this.state.house.words}
        </Text>
      </Card>
    ) : (
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
        <Text fontSize={4} mt={2} mb={2}>
          Loading House...
        </Text>
      </Card>
    )
    return (
      <React.Fragment>
        <Navbar />
        <Box className="homepage">
          <Box width={['80%', '65%', 1/2]} my={4} mx='auto' >
            {house}
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

export default House;
