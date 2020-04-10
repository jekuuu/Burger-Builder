import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-8da7b.firebaseio.com/',
});

export default instance;
