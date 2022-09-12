export interface Ingredient {
  name: string,
  amount: string
}
export interface IngredientGroup {
  name: string,
  ingredients: Ingredient[]
}
export interface RecipeStep {
  description: string,
  photoUrl: string
}
export interface Tag {
  tagName: string,
}
export interface FormValues {
  userProfileId: string,
  title: string,
  description: string,
  videoUrl: string,
  mainPhotoUrl: string,
  servingCount: string,
  cookingTime: string,
  difficultyLevel: string,
  completionPhotoUrl: string,
  tip: string,
  //status backend에서?
  kind: string,
  situation: string,
  method: string,
  ingredient: string,

  ingredientGroups: IngredientGroup[],
  recipeSteps: RecipeStep[],
  tags: Tag[]
}

export const defaultValues = {
  ingredientGroups: [
    {
      name: "재료",
      ingredients: [
        {
          name: "",
          amount: ""
        },
        {
          name: "",
          amount: ""
        },
        {
          name: "",
          amount: ""
        }
      ]
    }
  ],
  recipeSteps: [
    {
      description: "",
      photoUrl: ""
    }
  ]
};
