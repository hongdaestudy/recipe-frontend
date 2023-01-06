import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonWrapper, GoHomeBtn, TextWrapper, Wrapper } from './styles';

const NotFoundPage = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <TextWrapper>
        <h1>404</h1>
        <h2>Sorry Page Not Found</h2>
      </TextWrapper>
      <ButtonWrapper>
        <GoHomeBtn onClick={goHome}>홈으로 돌아가기</GoHomeBtn>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NotFoundPage;
