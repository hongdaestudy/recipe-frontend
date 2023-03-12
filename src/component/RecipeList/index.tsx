import React from 'react';
import styled from 'styled-components';
import { Recipe } from '../../types/detailView.type';
import FlexBox from '../Flex';
import { RecipeItem } from './RecipeItem';

interface IProps {
  recipeList: Recipe[];
  onClick: (id: string) => void;
}

export const RecipeList = ({ recipeList, onClick }: IProps) => {
  if (!recipeList.length) {
    return <ListWrapper>레시피가 존재하지 않습니다.</ListWrapper>;
  }

  return (
    <ListWrapper justifyContent="flex-start">
      {recipeList.map(recipe => {
        return (
          <RecipeItem onClick={onClick} key={recipe.recipeId} recipe={recipe} />
        );
      })}
    </ListWrapper>
  );
};

const ListWrapper = styled(FlexBox)`
  width: 100%;
`;
