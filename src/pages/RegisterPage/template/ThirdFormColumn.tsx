import React from 'react';
import FlexBox from '../../../component/Flex';
import { FirstFormBox, FormBox } from './styles';
import styled from 'styled-components';

export const ThirdFormColumn = () => {
  return (
    <FirstFormBox>
      <PaddingBox direction="column" justifyContent="flex-start">
        <FullWidthBox justifyContent="flex-start">
          <h1>요리 순서</h1>
          <IconButton
            onClick={() => console.log('요리 순서 사진 한번에 넣기 이벤트')}
          >
            <span></span>
            순서사진 한번에 넣기
          </IconButton>
        </FullWidthBox>
        <FullWidthBox justifyContent="flex-start">
          <FlexBox
            direction="column"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <B>요리의 맛이 좌우될 수 있는 중요한 부분은 빠짐없이 적어주세요.</B>
            <br />
            <B>예) 10분간 익혀주세요 ▷ 10분간 약한불로 익혀주세요.</B>
            <br />
            <PaddingB>
              마늘편은 익혀주세요 ▷ 마늘편을 충분히 익혀주셔야 매운 맛이
              사라집니다.
            </PaddingB>
            <PaddingB>
              {' '}
              꿀을 조금 넣어주세요 ▷ 꿀이 없는 경우, 설탕 1스푼으로 대체
              가능합니다.
            </PaddingB>
          </FlexBox>
        </FullWidthBox>
        <FullWidthBox>
          <CookStepBox direction="column"></CookStepBox>
        </FullWidthBox>
      </PaddingBox>
    </FirstFormBox>
  );
};

export const PaddingBox = styled(FlexBox)`
  /* padding-left: 60px; */
  width: 100%;
`;

export const IconButton = styled.button`
  padding: 4px 10px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;

  span {
    font-weight: 400;
    &::before {
      content: '\2b';
    }
  }
`;

export const FullWidthBox = styled(FlexBox)`
  width: 100%;
  margin-top: 10px;
  h1 {
    margin-right: 10px;
  }
`;

export const B = styled.b`
  font-weight: 200;
  color: #999;
  font-size: 14px;
`;

export const PaddingB = styled(B)`
  margin-left: 15px;
`;

export const CookStepBox = styled(FlexBox)`
  width: 100%;
`;
