import axios from 'axios';
import {BASE_URL} from './ServiceConstants';

axios.defaults.baseURL = BASE_URL; // Setting up Base Url

// Your Services
export const loginService = (loginData:FormData) => {
  return axios.post('your login api url', loginData);
};

//Write your Services below like above Service
