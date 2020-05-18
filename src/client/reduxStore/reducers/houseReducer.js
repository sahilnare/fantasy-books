
const initState = {
  houses: []
}

const houseReducer = (state = initState, action) => {

  if(action.type === 'FETCH_HOUSES') {
    let newHouses = action.data;
    return {
      ...state,
      houses: newHouses
    }
  }

  else {
    return state;
  }
}

export default houseReducer;
