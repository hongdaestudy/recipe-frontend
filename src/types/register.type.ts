export interface Ingredient {
  name: string,
  amount: string
}
export interface RecipeInformation {
  servingCount: string,
  cookingTime: string,
  difficultyLevel: string
}
export interface IngredientGroup {
  name: string,
  ingredients: Ingredient[]
}
export interface RecipeStep {
  description: string,
  photoFileList: FileList,
  sort:number

}
export interface RecipeTags {
  name: string,
  sort: number
}	
export interface FormValues {
  file: any,
  userProfileId: string,
  title: string,
  description: string,
  videoUrl: string,
  mainPhotoFileList: FileList,
  information:RecipeInformation,
  completionPhotoFileList: FileList,
  tip: string,
  //status backend에서?
  kind: string,
  situation: string,
  method: string,
  ingredient: string,
  status: string,
  ingredientGroups: IngredientGroup[],
  recipeSteps: RecipeStep[],
  recipeTags: RecipeTags[]
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
      photoFileList: new DataTransfer().files,
      sort:0
    }
  ]
};


