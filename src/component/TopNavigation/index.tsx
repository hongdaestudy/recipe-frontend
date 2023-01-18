import React, { useId, useState } from 'react';
import { Link, Pathname, To } from 'react-router-dom';
import styled from 'styled-components';

export const navRoutePath = {
  분류: '/recipe/list' as Pathname,
  랭킹: '/ranking' as Pathname,
  클래스: '/class' as Pathname,
};

export const TopNavigation = () => {
  const [activeLink, setActiveLink] = useState('추천');
  const uniqueId = useId();

  const clickActive = (id: string) => {
    setActiveLink(id);
  };

  return (
    <NavigationWrapper>
      <Ul>
        {Object.entries(navRoutePath).map(([nav, path]) => {
          return (
            <Li key={`${uniqueId}_${nav}`} onClick={() => clickActive(nav)}>
              <LinkText linkactive={nav.toString() === activeLink} to={path}>
                {nav}
              </LinkText>
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
  vertical-align: middle;
  /* @ts-ignore */
`;

const LinkText = styled(Link)<{ linkactive?: boolean }>`
  text-decoration: none;
  text-align: center;
  font-size: 18px;
  transform: translateY(-5px);
  color: ${({ linkactive }) => (linkactive === true ? 'yellow' : '#fff')};
  display: block;
`;

const DropDownText = styled.div`
  text-decoration: none;
  font-size: 18px;
  transform: translateY(-5.5px);

  color: #fff;
  display: block;
`;
