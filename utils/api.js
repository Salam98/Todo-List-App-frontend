
import axios from 'axios';
import BaseURL from '../env';
import AsyncStorage from '@react-native-async-storage/async-storage';


const api = axios.create({
  baseURL: BaseURL,
 // timeout: 5000,
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('authToken');
  //const username = await AsyncStorage.getItem('username');

   const isAuthRoute =
      config.url?.includes('/api/login') ||
      config.url?.includes('/api/register');
  if (token && !isAuthRoute) {
    config.headers.Authorization = `Bearer ${token}`;
  }
   else {
      delete config.headers.Authorization;
    }
    config.headers.Accept = 'application/json';
    config.headers['Content-Type'] = 'application/json';

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
