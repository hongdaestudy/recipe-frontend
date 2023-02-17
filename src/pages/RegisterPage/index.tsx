import React from 'react';
import styled from 'styled-components';
import FlexBox from '../../component/Flex';

export const RegisterPage = () => {
  return (
    <Container direction="column">
      <TopBox>
        <h1>레시피 등록</h1>
      </TopBox>
    </Container>
  );
};

export const Container = styled(FlexBox)`
  width: 100%;
  height: 100%;
  border: 1px solid #e6e7e8;
  background: #fff;
  margin: 0;
  padding: 0;
`;

export const TopBox = styled(FlexBox)`
  background: #f8f8f8;
  border-bottom: 1px solid #e6e7e8;
  padding: 14px 18px;
  font-size: 20px;
  font-weight: bold;
  position: relative;
`;
