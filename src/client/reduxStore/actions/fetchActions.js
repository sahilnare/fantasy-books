
import axios from 'axios';

export const fetchHouses = (data) => {
  return (dispatch, getState) => {
    axios.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10')
      .then(res => {
        console.log(res.data);
        dispatch({
          type: 'FETCH_HOUSES',
          data: res.data
        });
      });
  }
}
