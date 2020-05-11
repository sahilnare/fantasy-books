import React, { Component } from 'react';
import { Box, Flex, Button, Text } from 'rebass';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      author: ''
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBook(this.state);
    this.setState({name: '', author: ''});
  }

  render() {
    return (
      <div>
        <Box
        as='form'
        onSubmit={this.handleSubmit}
        py={3}
        width={1/2}
        mx='auto'
        >
          <Text
            fontSize={[ 1, 3, 4 ]}
            color='secondary'
            mt={3} mb={2}
          >Add Author</Text>
          <Flex mb={3}>
            <Box width={1/2} px={2}>
              <input type="text" onChange={this.handleChange} name="name" value={this.state.name} id="name" placeholder="Name of the book" />
            </Box>
            <Box width={1/2} px={2}>
              <input type="text" onChange={this.handleChange} name="author" value={this.state.author} id="author" placeholder="Name of it's author" />
            </Box>
          </Flex>
          <Flex flexWrap='wrap'>
              <Button variant='primary' px={2} mr={2} type="submit">
                Add
              </Button>
          </Flex>
        </Box>
      </div>
    );
  }
}

export default AddBook;
