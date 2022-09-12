import axios from 'axios';
import authHeader from './auth-header';
import { FormValues } from '../types/register.type';

const API_URL = 'https://httpbin.org/';
class RecipeService {
  getRecipeList() {
    //return axios.get(API_URL + 'get');
    return [];
  }
  register(recipe: FormValues) {
    return axios.post(API_URL + 'post', { headers: authHeader(), recipe });
  }
}
export default new RecipeService();