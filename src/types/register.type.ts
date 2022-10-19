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
  photoFileList: FileList
}
export interface Tag {
  tagName: string,
}
export interface FormValues {
  file: any,
  userProfileId: string,
  title: string,
  description: string,
  videoUrl: string,
  mainPhotoFileList: FileList,
  servingCount: string,
  cookingTime: string,
  difficultyLevel: string,
  completionPhotoFileList: FileList,
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
      photoFileList: new DataTransfer().files
    }
  ]
};


