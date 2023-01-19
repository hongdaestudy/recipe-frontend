import axios from 'axios';
import Comment from '../types/comment.type';

class CommentService {
  getCommentList() {
    //return axios.get(API_URL + 'get');
  }

  register(comment: Comment) {
    return axios.post('post', { comment });
  }
}
export default new CommentService();
