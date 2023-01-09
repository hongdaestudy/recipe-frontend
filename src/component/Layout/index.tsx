import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header';

interface ILayout {
  children: import('react').ReactNode;
}

/**
 *@component 기본 레이아웃
 *@brief 기본 레이아웃 컴포넌트
 *@date 2023. 01.09
 *
 */

export const Layout = ({ children }: ILayout) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;
