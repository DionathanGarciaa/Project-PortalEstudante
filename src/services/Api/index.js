import axios from 'axios';


const api = axios.create({
  baseURL: 'https://projetoportal.herokuapp.com/',
});

export default api;