import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper } from './styles';

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const goHome = () => {
    navigate('/');
  };
  return (
    <Wrapper>
      <h1>Not found</h1>
    </Wrapper>
  );
};
