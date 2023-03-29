import React, { useState } from 'react';
import FlexBox from '../../../../component/Flex';
import styled from 'styled-components';
import Input from '../../../../component/Input/Input';
import { StepBtn } from '../StepBtn';
import { SubmitHandler } from 'react-hook-form';

interface StepFormProps {
  step: number;
}

export const StepForm = ({ step }: StepFormProps) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <StepWrapper justifyContent="flex-start" alignItems="flex-start">
      <FlexBox alignItems="flex-start">
        <Step>Step{step}</Step>
      </FlexBox>
      <FlexBox direction="column">
        <FlexBox onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <Input
            as={'textarea'}
            width={430}
            style={{ padding: '6px 12px' }}
            height={160}
            placeholder="예) 소고기는 기름기를 떼어내고 적당한 크기로 썰어주세요."
          />
          <ImageBox src={`${process.env.PUBLIC_URL}/assets/pic_none2.gif`} />
          {isHovering && <StepBtn />}
        </FlexBox>
      </FlexBox>
    </StepWrapper>
  );
};
export const StepWrapper = styled(FlexBox)`
  margin: 6px 0;
`;

export const Step = styled.h1`
  color: #74b243;
  width: 120px;
  display: inline-block;
  margin-left: 80px;
  font-size: 30px;
  font-weight: normal;
  vertical-align: top;
`;

export const ImageBox = styled.img`
  width: 160px;
  height: 160px;
  margin-left: 8px;
  border: 1px solid #e1e1e1;
  cursor: pointer;
  display: inline-block;
  background-color: #e1e1e1;
`;
