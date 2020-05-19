
const initState = {
  books: []
}

const bookReducer = (state = initState, action) => {
  if(action.type === 'DELETE_BOOK') {
    let newBooks = state.books.filter(book => {
      return book.id !== action.id;
    });

    return {
      ...state,
      books: newBooks
    }
  }

  else if(action.type === 'DELETE_BOOK_ERR') {
    console.log('Delete book error: ', action.err);
    return state;
  }

  else if(action.type === 'ADD_BOOK') {
    let newBooks = [...state.books, action.book];
    return {
      ...state,
      books: newBooks
    }
  }

  else if(action.type === 'ADD_BOOK_ERR') {
    console.log('Add book error: ', action.err);
    return state;
  }

  else {
    return state;
  }
}

export default bookReducer;
