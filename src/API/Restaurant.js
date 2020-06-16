import axios from 'axios';

const api = 'http://opentable.herokuapp.com/api';

export const searchRestaurent = async (query) => {
  try {
    const url = api + '/restaurants';
    const response = await axios.get(url, {
      params: {city: query},
    });
    const {data} = response;
    return data;
  } catch (err) {
    console.log('error in searchRestaurent', err);
  }
};