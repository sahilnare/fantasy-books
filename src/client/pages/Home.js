import React, { Component } from 'react';
import '../app.css';
import WizardHat from '../assets/img/hat.png';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import Navbar from '../components/Navbar';
import { Box, Card, Image, Heading, Text, Flex } from 'rebass';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {id: 1, name: 'Discworld', author: 'Terry'},
        {id: 2, name: 'Mistborn', author: 'Brandon'},
        {id: 3, name: 'ASOIAF', author: 'George'}
      ]
    }
  }

  deleteBook = (id) => {
    console.log(id);
    const books = this.state.books.filter(book => {
      return book.id !== id;
    });
    this.setState({books: books});
  }

  addBook = (book) => {
    book.id = Math.floor(Math.random()*10000);
    console.log(book);
    let books = [...this.state.books, book];
    this.setState({books: books});
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

          <Book books={this.state.books} deleteBook={this.deleteBook}/>
          <AddBook addBook={this.addBook}/>

        </Box>
      </React.Fragment>
    );
  }
}

export default Home;
