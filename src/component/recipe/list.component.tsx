import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeService from '../../services/recipe.service';
import { Recipe } from '../../types/detailView.type';

export default function List() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  useEffect(() => {
    RecipeService.getRecipeList().then(setRecipeList);
  }, []);

  const navigate = useNavigate();
  const onClickHandler = (id: string) => {
    navigate(`/recipe/${id}`);
  };
  return (
    <>
      <h2>레시피 목록</h2>

      {recipeList.map(recipe => (
        <span
          key={recipe.recipeId}
          style={{ display: 'inline-block' }}
          onClick={() => onClickHandler(recipe.recipeId)}
        >
          <StyledImg src={recipe.mainPhotoUrl} alt="" />
          <p>{recipe.title}</p>
        </span>
      ))}
    </>
  );
}
const StyledImg = styled.img`
  width: 320px;
  height: 240px;
`;
