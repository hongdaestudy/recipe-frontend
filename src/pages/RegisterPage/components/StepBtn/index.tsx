import React from 'react';
import styled from 'styled-components';
import FlexBox from '../../../../component/Flex';

/**
 * StepForm에 Focus되었을때 보이는 button 컴포넌트
 *
 * 각 스텝의 상태 이동 및 삭제
 *
 * **/

export const StepBtn = () => {
  return (
    <Wrapper direction="column">
      <Btn></Btn>
      <Btn></Btn>
      <Btn>맞춤</Btn>
      <Btn>+</Btn>
      <Btn>X</Btn>
    </Wrapper>
  );
};

const Wrapper = styled(FlexBox)`
  width: 30px;
  height: 155px;
  margin-left: 5px;
`;

const Btn = styled.span`
  width: 30px;
  height: 30px;
  color: #999;
  display: block;
  font-size: 13px;
  background-color: #eee;
  margin: 1px;
  padding-top: 5px;
  text-align: center;
  &:hover {
    background-color: #53961f;
    color: #fff;
  }
`;
