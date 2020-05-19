import React, { Component } from 'react';
import { Box, Card, Heading, Text, Flex } from 'rebass';
import Navbar from './navbar/Navbar';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class House extends Component {

  render() {
    const id = this.props.match.params.house_id;
    const house = this.props.house ? (
      <Card
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
        <Heading as='h1' fontSize={5} my={2}>
          {this.props.house[id].name}
        </Heading>
        <Text fontSize={4} mt={2} mb={2}>
          Region: {this.props.house[id].region}
        </Text>
        <Text fontSize={4} mt={2} mb={2}>
          Coat of arms: {this.props.house[id].coatOfArms}
        </Text>
        <Text fontSize={4} mt={2} mb={2}>
          Words: {this.props.house[id].words}
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
  return {
    house: state.firestore.data.houses
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props =>[
    { collection: 'houses', doc: props.match.params.house_id }
  ])
)(House);
