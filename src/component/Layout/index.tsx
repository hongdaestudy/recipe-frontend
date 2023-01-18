import React from 'react';
import styled from 'styled-components';
import { Footer } from '../Footer';
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
    <>
      <div className="box">
        <Header />
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
};

const Container = styled.div`
  min-width: 1280px;
  position: relative;
  /* height: 100vh; */
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border: 1px solid #e6e7e8;
  padding: 0 0 20px 0;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;
