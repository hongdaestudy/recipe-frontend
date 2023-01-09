import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const navRoutePath = {
  추천: '/recomment',
  분류: '/classification',
  랭킹: '/ranking',
  클래스: '/class',
};

export const TopNavigation = () => {
  const uniqueId = useId();
  return (
    <NavigationWrapper>
      <Ul>
        {Object.keys(navRoutePath).map(nav => {
          return (
            <Li key={`${uniqueId}_${nav}`}>
              <LinkText to={`/${[nav]}`}>{nav}</LinkText>
            </Li>
          );
        })}
        <Li>
          <DropDownText>더보기</DropDownText>
        </Li>
      </Ul>
    </NavigationWrapper>
  );
};

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  margin: 0 0 16px;
  box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
  color: #333333;
  background-color: #74b243;
`;

const Ul = styled.ul`
  width: 80%;
  margin: 0 auto;
  padding: 5px 30px 0;
  text-align: center;
  display: flex;
`;

const Li = styled.li`
  list-style: none;
  width: 100%;
`;

const LinkText = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  display: block;
`;

const DropDownText = styled.div`
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  display: block;
`;
