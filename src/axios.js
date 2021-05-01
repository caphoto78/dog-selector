import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://dog.ceo/api/'
});

export default instance;