interface Ingredient {
  name: string;
  amount: string;
}
interface IngredientGroup {
  name: string;
  ingredients: Ingredient[];
}
interface RecipeStep {
  description: string;
  photoUrl?: string;
}
export interface Tag {
  tagName: string;
}
export interface KnowhowVideo {
  title: string;
  thumbnailUrl: string;
}
export interface Comment {
  nickname: string;
  profileUrl: string;
  contents: string;
  createdAt: string;
  score?: number;
  level: number;
  photoUrl?: string;
}
export interface Recipe {
  recipeId: string;
  nickname?: string;
  isFollowingChef?: boolean;
  title?: string;
  description?: string;
  videoUrl?: string;
  mainPhotoUrl?: string;
  servingCount?: string;
  cookingTime?: string;
  difficultyLevel?: string;
  completionPhotoUrl?: string;
  tip?: string;
  //status backend에서?
  kind?: string;
  situation?: string;
  method?: string;
  ingredient?: string;
  grade?: number;
  isNew?: boolean;
  ingredientGroups?: IngredientGroup[];
  recipeSteps?: RecipeStep[];
  tags?: Tag[];
  knowhowVideos?: KnowhowVideo[];

  createdAt?: string;
  updatedAt?: string;

  comments?: Comment[];
}
