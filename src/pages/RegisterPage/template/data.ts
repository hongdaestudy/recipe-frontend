import { OptionType } from '../../../component/Select/index';
export const categoryOption1: OptionType[] = [
  { text: '종류별', value: '' },
  { text: '메인반찬', value: '메인반찬' },
  { text: '밑반찬', value: '밑반찬' },
  { text: '국탕', value: '국탕' },
  { text: '찌개', value: '찌개' },
  { text: '디저트', value: '디저트' },
  { text: '퓨전', value: '퓨전' },
  { text: '김치/젓갈/장류', value: '김치/젓갈/장류' },
  { text: '양념/소스/잼', value: '양념/소스/잼' },
  { text: '양식', value: '양식' },
  { text: '샐러드', value: '샐러드' },
  { text: '스프', value: '스프' },
  { text: '빵', value: '빵' },
];

export const categoryOption2: OptionType[] = [
  { text: '시간별', value: '' },
  { text: '일상', value: '일상' },
  { text: '초스피드', value: '초스피드' },
  { text: '손님접대', value: '손님접대' },
  { text: '술안주', value: '술안주' },
  { text: '다이어트', value: '다이어트' },
  { text: '도시락', value: '도시락' },
  { text: '영양식', value: '영양식' },
  { text: '간식', value: '간식' },
  { text: '야식', value: '야식' },
  { text: '푸드스타일링', value: '푸드스타일링' },
  { text: '해장', value: '해장' },
  { text: '명절', value: '명절' },
  { text: '이유식', value: '이유식' },
];

export const categoryOption3: OptionType[] = [
  { text: '방법별', value: '' },
  { text: '볶음', value: '볶음' },
  { text: '끓이기', value: '끓이기' },
  { text: '부침', value: '부침' },
  { text: '조릶', value: '조릶' },
  { text: '무침', value: '무침' },
  { text: '비빔', value: '비빔' },
  { text: '찜', value: '찜' },
  { text: '절임', value: '절임' },
  { text: '튀김', value: '튀김' },
  { text: '삶기', value: '삶기' },
  { text: '굽기', value: '굽기' },
  { text: '데치기', value: '데치기' },
  { text: '회', value: '회' },
];

export const categoryOption4: OptionType[] = [
  { text: '재료별', value: '' },
  { text: '소고기', value: '소고기' },
  { text: '돼지고기', value: '돼지고기' },
  { text: '닭고기', value: '닭고기' },
  { text: '육류', value: '육류' },
  { text: '채소류', value: '채소류' },
  { text: '해물류', value: '해물류' },
  { text: '달걀유제품', value: '달걀유제품' },
  { text: '가공식품류', value: '가공식품류' },
  { text: '쌀', value: '쌀' },
  { text: '밀가루', value: '밀가루' },
  { text: '건어물류', value: '건어물류' },
  { text: '버섯류', value: '버섯류' },
  { text: '과일류', value: '과일류' },
  { text: '콩/견과류', value: '콩/견과류' },
  { text: '곡류', value: '곡류' },
];

export const categoryOption5: OptionType[] = [
  { text: '인원', value: '' },
  { text: '1인분', value: '1인분' },
  { text: '2인분', value: '2인분' },
  { text: '3인분', value: '3인분' },
  { text: '4인분', value: '4인분' },
  { text: '5인분', value: '5인분' },
  { text: '6인분 이상', value: '6인분 이상' },
];

export const categoryOption6: OptionType[] = [
  { text: '시간', value: '' },
  { text: '5분이내', value: '5분이내' },
  { text: '10분이내', value: '10분이내' },
  { text: '3인분', value: '3인분' },
  { text: '4인분', value: '4인분' },
  { text: '5인분', value: '5인분' },
  { text: '6인분 이상', value: '6인분 이상' },
];

export const categoryOption7: OptionType[] = [
  { text: '난이도', value: '' },
  { text: '아무나', value: '아무나' },
  { text: '초급', value: '초급' },
  { text: '중급', value: '중급' },
  { text: '고급', value: '고급' },
  { text: '신의경지', value: '신의경지' },
];

export const jsonExample = {
  // 재료 ingredients
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
  memberId: '1',
  // 저장 후 공개 할지 아니면 바로 공개할지 버튼 상태에 따라 구현
  status: 'IN_PROGRESS', //IN_PROGRESS,PUBLISHED
  // recipeTitle
  title: '김치',
  // recipeDescription
  description: '--',
  // videoUrl
  videoUrl: '--',

  category: {
    // category
    kind: 'SIDE',
    // occasion
    situation: 'ROUTINE',
    // method
    method: 'MIX',
    // ingredient
    ingredient: 'CHICKEN',
  },
  information: {
    // totalNumber
    servingCount: 'ONE',
    cookingTime: 'FIVE_MINUTES_LESS', //
    difficultyLevel: 'EASY',
  },
  tip: 'tip',
  mainPhotoFileId: '2',
  completionPhotoFileId: ['1'],
  recipeTags: [
    {
      name: '김',
    },
    {
      name: '밥',
    },
  ],
};
