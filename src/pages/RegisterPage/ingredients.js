export const submitData = {
  ingredientGroups: [
    {
      name: '재료',
      ingredients: [
        {
          name: '돼지',
          amount: '300g',
        },
        {
          name: '배추',
          amount: '1/2개',
        },
        {
          name: '기름',
          amount: '1T',
        },
      ],
    },
  ],
  recipeSteps: [
    {
      description: '1',
      photoFileId: '3',
    },
    {
      description: '2',
      photoFileId: '4',
    },
  ],
  memberId: '1', // 로그인 아이디
  status: 'IN_PROGRESS', // 저장 // 저장 후 공개 --> PUBLISHED
  title: '-',
  description: '--',
  videoUrl: '--',
  category: {
    kind: 'SIDE',
    situation: 'ROUTINE',
    method: 'MIX',
    ingredient: 'BEEF',
  },
  information: {
    servingCount: 'ONE',
    cookingTime: 'FIVE_MINUTES_LESS',
    difficultyLevel: 'EASY',
  },
  tip: 'tip',
  mainPhotoFileId: '2',
  completionPhotoFileId: '1',
  recipeTags: [
    {
      name: '김',
    },
    {
      name: '밥',
    },
  ],
};
