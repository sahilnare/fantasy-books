import React, { Component } from 'react';
import { Box, Card, Image, Heading, Text, Flex } from 'rebass';
import Navbar from './components/navbar/Navbar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Asoiaf extends Component {

  render() {
    const houses = this.props.houses;
    const houseList = houses ? (
      houses.map((house) => {
        return (
           <Card
             sx={{
               p: 1,
               borderRadius: 2,
               boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
             }} my={3} key={house.id}>
              <Link to={'/asoiaf/' + house.id} style={{color: '#000', textDecoration: 'none'}}>
                 <Box p={4} width={2/3} mx='auto'>
                   <Heading as='h1' fontSize={4} mb={4}>
                     {house.name}
                   </Heading>
                   <Text fontSize={3} my={3}>
                     {house.region}
                   </Text>
                 </Box>
              </Link>
           </Card>
         )
     })
    ) : (
      <Card
        sx={{
          p: 1,
          borderRadius: 2,
          boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
        }} my={2}>
          <Box p={4} width={2/3} mx='auto'>
            <Heading as='h1'>
              No houses
            </Heading>
          </Box>
      </Card>
    )
    return (
      <React.Fragment>
        <Navbar />
        <Box className="homepage">
          <Box width={['80%', '65%', 1/2]} my={4} mx='auto' >
            <Heading as='h1' fontSize={5} my={2}>
              A Song of Ice and Fire
            </Heading>
            <Text fontSize={4} mt={2} mb={4}>
              The Houses:
            </Text>
            {houseList}
          </Box>
        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    houses: state.firestore.ordered.houses
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'houses' }])
)(Asoiaf);
