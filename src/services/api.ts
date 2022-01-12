import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.googleapis.com/customsearch/v1',
});

export default api;
