import React from 'react';
import styled from 'styled-components';
import { Recipe } from '../../types/detailView.type';
import FlexBox from '../Flex';
import { StarScore } from '../StarScore';

interface IProps {
  recipe: Recipe;
  onClick: (id: string) => void;
}
// 별점 데이터가 없음, 새로 입력된 데이터인지 존재하는 데이터인지
export const RecipeItem = ({ recipe, onClick }: IProps) => {
  return (
    <ItemWrapper direction="column" justifyContent="flex-start">
      <FlexBox onClick={() => onClick(recipe.recipeId)}>
        <Img src={recipe.mainPhotoUrl} alt="메인이미지" />
        <div style={{width: "100%", height: "100%", position:"relative"}}>
        {
          recipe.videoUrl ? (<img src="/assets/icon_vod.png" alt="vod" style={{position: "absolute", right: "0px", bottom: "0px"}}/>) : ""
        }
        </div>
      </FlexBox>
      <FlexBox
        style={{ width: '100%' }}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Title>{recipe.title}</Title>
        <Span>{recipe.nickname}</Span>
        {/* 별표 점수 추가 해야함 */}
        <FlexBox style={{ marginTop: '7px' }}>
          <StarScore score={5} />
          {/* <RedNewSpan>NEW</RedNewSpan> */}
          {recipe.comments?.length === 0 ? <RedNewSpan>NEW</RedNewSpan> : null}
          <GraySpan>조회수 {155}</GraySpan>
        </FlexBox>
      </FlexBox>
    </ItemWrapper>
  );
};

const ItemWrapper = styled(FlexBox)`
  height: 386px;
  width: 25%;
  margin-right: 16px;
`;

{
  /* <StyledImg src={recipe.mainPhotoUrl} alt="" />
<p>{recipe.title}</p> */
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  vertical-align: middle;
`;

const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  text-align: left;
  font-size: 15px;
`;

const Span = styled.span`
  color: #333;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 14px;
`;

const GraySpan = styled.span`
  color: #999;
  font-size: 13px;
  margin-left: 2px;
  font-weight: 300;
`;

const RedNewSpan = styled.span`
  display: inline-block;
  background-color: #ff5e5e;
  color: white;
  font-size: 11px;
  padding: 3px 5px;
  border-radius: 4px;
  margin-right: 8px;
`;
