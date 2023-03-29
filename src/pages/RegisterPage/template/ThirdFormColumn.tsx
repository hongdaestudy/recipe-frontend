import React from 'react';
import FlexBox from '../../../component/Flex';
import { FirstFormBox, FormBox, IconButton } from './styles';
import styled from 'styled-components';
import { StepForm } from '../components/StepForm';

export const ThirdFormColumn = () => {
  return (
    <FirstFormBox>
      <PaddingBox direction="column" justifyContent="flex-start">
        <FullWidthBox justifyContent="flex-start" alignItems="flex-start">
          <h1>요리 순서</h1>
          <IconBtn
            onClick={() => console.log('요리 순서 사진 한번에 넣기 이벤트')}
          >
            순서사진 한번에 넣기
          </IconBtn>
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
        <FullWidthBox direction="column">
          <CookStepBox
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <StepForm step={1} />
          </CookStepBox>
          <FlexBox>
            <AddBtn>
              <img
                src={`${process.env.PUBLIC_URL}/assets/add_icon.png`}
                alt={'addIcon'}
              />
              순서 추가
            </AddBtn>
          </FlexBox>
          <ImageWrapper justifyContent="flex-start" alignItems="flex-start">
            <FlexBox direction="column">
              <ImageTitle>요리 완성사진</ImageTitle>
              <IconBtn
                onClick={() => console.log('요리 순서 사진 한번에 넣기 이벤트')}
              >
                <span></span>
                사진 한번에 넣기
              </IconBtn>
            </FlexBox>
          </ImageWrapper>
        </FullWidthBox>
      </PaddingBox>
    </FirstFormBox>
  );
};

export const PaddingBox = styled(FlexBox)`
  /* padding-left: 60px; */
  width: 100%;
`;

export const FullWidthBox = styled(FlexBox)`
  width: 100%;
  margin-top: 20px;
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

export const AddBtn = styled.button`
  border: none;
  font-size: 16px;
  margin-right: 4px;
  cursor: pointer;
  width: 180px;
  transform: translate(-120px, 12px);
  position: relative;
  background-color: #ffffff;
  img {
    transform: translate(-5px, 4px);
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
`;

export const ImageWrapper = styled(FlexBox)`
  margin-top: 40px;

  width: 100%;
  height: 100%;
`;

export const ImageTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  margin-bottom: 20px;
`;

const IconBtn = styled.button`
  padding: 4px 10px 5px;
  font-size: 12px;
  line-height: 1.5;
  border-radius: 3px;
  color: #333;
  border: 1px solid #ccc;
  background-color: #ffffff;
`;
