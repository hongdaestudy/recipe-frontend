interface Ingredient {
  name: string,
  amount: string
}
interface IngredientGroup {
  name: string,
  ingredients: Ingredient[]
}
interface RecipeStep {
  description: string,
  photoUrl?: string
}
interface Tag {
  tagName: string,
}

export interface Recipe {
  recipeId: string;
  userProfileId?: string,
  title?: string,
  description?: string,
  videoUrl?: string,
  mainPhotoUrl?: string,
  servingCount?: string,
  cookingTime?: string,
  difficultyLevel?: string,
  completionPhotoUrl?: string,
  tip?: string,
  //status backend에서?
  kind?: string,
  situation?: string,
  method?: string,
  ingredient?: string,

  ingredientGroups?: IngredientGroup[],
  recipeSteps?: RecipeStep[],
  tags?: Tag[]
}