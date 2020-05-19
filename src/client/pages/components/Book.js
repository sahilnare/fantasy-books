import React from 'react';
import { Box, Text, Button } from 'rebass';

const Book = ({books, deleteBook}) => {

  const bookList = books ? (
    books.map(book => {
      return (
        <Text
          fontSize={[ 1, 3, 4 ]}
          fontWeight='bold'
          color='primary'
          key={book.id}
          my={3}
        >
          {book.name} by {book.author}
          <Button variant='secondary' px={2} ml={4} onClick={() => {deleteBook(book.id)}}>
            Delete
          </Button>
        </Text>
      );
    })
  ) : (
    <Text
      fontSize={[ 1, 3, 4 ]}
      fontWeight='bold'
      color='primary'
    >No books here</Text>
  );

  return (
    <Box width={1/2} mx='auto'>
      {bookList}
    </Box>
  );
}

export default Book;
