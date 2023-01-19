import api from './api';
import { FormValues } from '../types/register.type';
import { Recipe } from '../types/detailView.type';
import data from '../data.json';

class RecipeService {
  getRecipeList() {
    //return axios.get(API_URL + 'get', { headers: authHeader() });
    return new Promise<Recipe[]>(resolve => {
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
    /*
    const formData = new FormData();
    
    formData.append("mainPhotoFile" ,recipe.mainPhotoFileList[0]);

    for(let i = 0; i<recipe.completionPhotoFileList.length; i++){
      formData.append("completionPhotoFileList" ,recipe.completionPhotoFileList[i]);
    }
    for(let i = 0; i<recipe.recipeSteps.length; i++){
      formData.append("stepPhotoFileList" ,recipe.recipeSteps[i].photoFileList[0]);
    }
    formData.append("recipe",new Blob([JSON.stringify(recipe)], { type: "application/json" }));

    return api.post('/recipes', formData,{ headers: {'Content-Type':'multipart/form-data'} });
    */
    return api.post('/recipes', recipe);
  }
}
export default new RecipeService();