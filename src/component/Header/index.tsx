import React from 'react';
import { TopNavigation } from '../TopNavigation';
import { UserIcon } from '../UserIcon';

import {
  HeadWrapper,
  HomeLink,
  NestWrapper,
  SearchBtn,
  SearchForm,
  SearchInput,
  SearchWrapper,
} from './styles';

export const Header = () => {
  return (
    <HeadWrapper>
      <NestWrapper>
        <HomeLink to="/">
          <img
            src={`${process.env.PUBLIC_URL}/assets/1000recipe.png`}
            alt="home logo"
          />
        </HomeLink>
        <SearchWrapper>
          <SearchForm>
            <div>
              <SearchInput type={'text'} />
              <SearchBtn>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/search_icon.svg`}
                  alt="search"
                />
              </SearchBtn>
            </div>
          </SearchForm>
        </SearchWrapper>
        <UserIcon icon="login" />
      </NestWrapper>
      <TopNavigation />
    </HeadWrapper>
  );
};
