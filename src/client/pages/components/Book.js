import React from 'react';
import { Box, Text } from 'rebass';

const Book = ({books, deleteBook}) => {

  const bookList = books.length ? (
    books.map(book => {
      return (
        <Text
          fontSize={[ 1, 3, 4 ]}
          fontWeight='bold'
          color='primary'
          key={book.id}
          onClick={() => {deleteBook(book.id)}}
        >
          {book.name} by {book.author}
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
