import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';


export const logout = async () => {
 try {
    await api.post(`/api/logout`); 
  } catch (error) {
    console.log('Logout API error (may be expected if already logged out):', error);
  } finally {
    await AsyncStorage.multiRemove(['authToken', 'username']);    
    delete api.defaults.headers.common['Authorization'];
  }


};