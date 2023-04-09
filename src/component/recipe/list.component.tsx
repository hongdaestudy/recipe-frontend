import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import RecipeService from '../../services/recipe.service';
import { Recipe } from '../../types/detailView.type';
import FlexBox from '../Flex';
import { LoadingIndicator } from '../LoadingIndicator';
import { RecipeList } from '../RecipeList';
import { IFilter, ListFilter } from '../ListFilter';
import { Pagination } from '../Pagination';

export default function List() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState<IFilter>({
    kind: '',
    situation: '',
    ingredient: '',
    method: '',
  });

  const updateFilter = (param: IFilter) => {
    setFilter({
      ...filter,
      ...param,
    });
  };

  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);
  // redux 에 저장
  const getRecipeData = async () => {
    setLoading(true);
    const response = await RecipeService.getRecipeList({
      ...filter,
      page,
      limit,
    });
    setRecipeList(response);
    setTotal(4);
    setLoading(false);
  };

  useEffect(() => {
    console.log(filter);
    getRecipeData();
  }, [filter, page]);

  const navigate = useNavigate();
  const onClickHandler = (id: string) => {
    navigate(`/recipe/${id}`);
  };

  if (loading === true) {
    return (
      <Wrapper direction="column">
        <FlexBox justifyContent="space-between">
          <FlexBox justifyContent="flex-start">
            <Head1>레시피 데이터를 가져오는 중입니다.</Head1>
          </FlexBox>
        </FlexBox>
        <LoadingIndicator />
      </Wrapper>
    );
  }

  return (
    <Wrapper direction="column">
      <ListFilter updateFilter={updateFilter} filter={filter} />

      <UpWrapper justifyContent="space-between">
        <FlexBox justifyContent="flex-start">
          <Head1>
            총 <b>{recipeList.length}</b>개의 맛있는 레시피가 있습니다.
          </Head1>
        </FlexBox>
      </UpWrapper>

      <RecipeList onClick={onClickHandler} recipeList={recipeList} />

      <Pagination page={page} total={total} limit={limit} setPage={setPage} />
    </Wrapper>
  );
}

const UpWrapper = styled(FlexBox)`
  width: 100%;
  margin: 5px 8px 20px 0;
`;

const Head1 = styled.h1`
  font-size: 16;
  color: #333;

  font-weight: 400;
  b {
    color: #74b243;
    font-size: 26px;
    font-weight: 500;
  }
`;

const Wrapper = styled(FlexBox)`
  padding: 22px;
  padding-right: 6px;
`;
