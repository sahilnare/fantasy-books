import React, { Component } from 'react';
import '../app.css';
import WizardHat from '../assets/img/hat.png';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import Navbar from '../components/Navbar';
import { Box, Card, Image, Heading, Text, Flex } from 'rebass';
import { connect } from 'react-redux';
import { addBook } from '../actions/postActions';
import { deleteBook } from '../actions/deleteActions';

class Home extends Component {

  deleteBook = (id) => {
    this.props.deleteBook(id);
  }

  addBook = (book) => {
    book.id = Math.floor(Math.random()*10000);
    this.props.addBook(book);
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Box className="homepage">
          <Box width={['80%', '65%', 1/2]} my={4} mx='auto' >
            <Card
              sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
              }}>
                <Box width={1/2} mx='auto'>
                  <Image src={WizardHat} />
                </Box>
                <Box p={3} width={1/2} mx='auto'>
                  <Heading as='h1'>
                    Welcome to Fantasy Books!
                  </Heading>
                  <Text fontSize={2} my={2}>
                    Behold!
                  </Text>
                </Box>
            </Card>
          </Box>

          <Book books={this.props.books} deleteBook={this.deleteBook}/>
          <AddBook addBook={this.addBook}/>

        </Box>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (id) => {
      dispatch(deleteBook(id));
    },
    addBook: (book) => {
      dispatch(addBook(book));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
