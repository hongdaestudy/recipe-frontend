import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_BASE_URL;

class UserService {
  getPublicContent() {
    //return axios.get(API_URL + 'all');
    return [];
  }
  getUserBoard() {
    //return axios.get(API_URL + 'user', { headers: authHeader() });
    return [];
  }
}
export default new UserService();