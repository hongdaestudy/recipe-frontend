import axios from 'axios';
import authHeader from './auth-header';
import { FormValues } from '../types/register.type';
import { Recipe } from '../types/detailView.type';
import data from "../data.json";


const API_URL = 'https://httpbin.org/';
class RecipeService {
  getRecipeList() {
    //return axios.get(API_URL + 'get', { headers: authHeader() });
    return new Promise<Recipe[]>((resolve) => {
      setTimeout(()=> {
        resolve(data);
      }, 300);
    });
  }

  getRecipe(recipeId: string) {
    //return axios.get(API_URL + 'get', { headers: authHeader() });
    return new Promise<Recipe|undefined>((resolve) => {
      setTimeout(()=> {
        resolve(data.find(recipe => recipe.recipeId === recipeId));
      }, 300);
    });
  }

  register(recipe: FormValues) {
    return axios.post(API_URL + 'post', { headers: authHeader(), recipe });
  }
}
export default new RecipeService();