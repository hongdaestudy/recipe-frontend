import axios from 'axios';
import authHeader from './auth-header';
import Comment from '../types/comment.type';

const API_URL = process.env.REACT_APP_BASE_URL;
class CommentService {
  getCommentList() {
    //return axios.get(API_URL + 'get', { headers: authHeader() });
  }

  register(comment: Comment) {
    return axios.post(API_URL + 'post', { headers: authHeader(), comment });
  }
}
export default new CommentService();