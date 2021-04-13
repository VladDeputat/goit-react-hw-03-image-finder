import axios from 'axios';
const KEY = '20734664-af4acccafc6bb35b2dfeb891d';

const searchImg = ({ query = '', page = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};
const getImg = { searchImg };
export default getImg;
