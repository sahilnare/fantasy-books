import React, { Component } from 'react';
import { Box, Card, Image, Heading, Text, Flex } from 'rebass';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Asoiaf extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    }
  }

  componentDidMount() {
    axios.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50')
      .then(res => {
        this.setState({houses: res.data});
      });

    axios.get('https://www.googleapis.com/books/v1/volumes?q=mistborn')
      .then(res => console.log(res.data));
  }

  render() {
    const {houses} = this.state;
    const houseList = houses.length ? (
      houses.map((house, id) => {
        let house_id = id + 1;
        return (
           <Card
             sx={{
               p: 1,
               borderRadius: 2,
               boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
             }} my={3} key={id}>
              <Link to={'/asoiaf/' + house_id} style={{color: '#000', textDecoration: 'none'}}>
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

export default Asoiaf;
