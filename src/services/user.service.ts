import axios from 'axios';
const API_URL = process.env.REACT_APP_BASE_URL;

class UserService {
  getPublicContent() {
    //return axios.get(API_URL + 'all');
    return [];
  }
  getUserBoard() {
    //return axios.get(API_URL + 'user');
    return [];
  }
}
export default new UserService();