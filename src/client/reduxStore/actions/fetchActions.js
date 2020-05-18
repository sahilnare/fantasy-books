
import axios from 'axios';

export const fetchHouses = (data) => {
  return (dispatch, getState) => {
    axios.get('https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50')
      .then(res => {
        dispatch({
          type: 'FETCH_HOUSES',
          data: res.data
        });
      });
  }
}
