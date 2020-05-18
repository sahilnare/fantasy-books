import React, { Component } from 'react';
import { Box, Card, Heading, Text, Flex } from 'rebass';
import Navbar from './navbar/Navbar';
import { connect } from 'react-redux';

class House extends Component {

  render() {
    console.log(this.props.house);
    const house = this.props.house.name ? (
      <Card
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
        <Heading as='h1' fontSize={5} my={2}>
          {this.props.house.name}
        </Heading>
        <Text fontSize={4} mt={2} mb={2}>
          Region: {this.props.house.region}
        </Text>
        <Text fontSize={4} mt={2} mb={2}>
          Coat of arms: {this.props.house.coatOfArms}
        </Text>
        <Text fontSize={4} mt={2} mb={2}>
          Words: {this.props.house.words}
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

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.house_id;
  if(state.house.houses.length) {
    return {
      house: state.house.houses[id-1]
    }
  }
  else {
    return {
      house: {name: false}
    }
  }
}

export default connect(mapStateToProps)(House);
