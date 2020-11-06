import axios from 'axios';

const api = axios.create({
  baseURL: 'https://projetoportal.herokuapp.com/',
  // baseURL: 'http://localhost:5557/',
});

export default api;