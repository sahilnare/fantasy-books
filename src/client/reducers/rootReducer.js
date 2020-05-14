
const initState = {
  houses: [],
  books: [
    {id: 1, name: 'Discworld', author: 'Terry'},
    {id: 2, name: 'Mistborn', author: 'Brandon'},
    {id: 3, name: 'ASOIAF', author: 'George'}
  ]
}

const rootReducer = (state = initState, action) => {
  if(action.type === 'DELETE_BOOK') {
    let newBooks = state.books.filter(book => {
      return book.id !== action.id;
    });

    return {
      ...state,
      books: newBooks
    }
  }

  if(action.type === 'ADD_BOOK') {
    let newBooks = [...state.books, action.book];
    return {
      ...state,
      books: newBooks
    }
  }

  if(action.type === 'FETCH_HOUSES') {
    let newHouses = action.data;
    return {
      ...state,
      houses: newHouses
    }
  }

  return state;
}

export default rootReducer;
