import React from 'react';
import styled from 'styled-components';
import FlexBox from '../../component/Flex';
import { Icon } from '../../component/Icon';
import Input from '../../component/Input/Input';

export const RegisterPage = () => {
  return (
    <Container direction="column">
      <TopBox>
        <h1>레시피 등록</h1>
      </TopBox>
      <FirstFormBox justifyContent="flex-start">
        <FormBox direction="column" justifyContent="flex-start">
          <ColumnBox justifyContent="flex-start">
            <Label>레시피 제목</Label>
            <Input
              as={'input'}
              width={610}
              height={50}
              style={{
                backgroundColor: '#f5f5f5',
                paddingLeft: '6px 12px',
                border: '1px solid #e1e1e1',
              }}
              placeholder="예)소고기 미역국 끓이기"
            />
          </ColumnBox>
          <ColumnBox justifyContent="flex-start">
            <Label>요리 소개</Label>
            <Input
              as={'textarea'}
              width={610}
              height={100}
              style={{
                fontSize: '16px',
                backgroundColor: '#f5f5f5',
                paddingLeft: '6px 12px',
                border: '1px solid #e1e1e1',
              }}
              placeholder="이 레시피의 탄생배경을 적어주세요. 
              예) 남편의 생일을 맞아 소고기 미역국을 끓여봤어요. 어머니로부터 배운 미역국 레시피를 남편의 입맛에 맞게 고안했습니다."
            />
          </ColumnBox>

          <ColumnBox justifyContent="flex-start">
            <Label>동영상</Label>
            <Input
              as={'textarea'}
              width={380}
              height={100}
              style={{
                resize: 'none',
                fontSize: '16px',
                backgroundColor: '#f5f5f5',
                paddingLeft: '6px 12px',
                border: '1px solid #e1e1e1',
                marginRight: '10px',
              }}
              placeholder="동영상이 있으면 주소를 입력하세요.
              (Youtube,네이버tvcast,다음tvpot 만 가능) 예)http://youtu.be/lA0Bxo3IZmM"
            />
            <div>
              <Icon
                width={178}
                height={100}
                src={`${process.env.PUBLIC_URL}/assets/pic_none5.gif`}
              />
            </div>
          </ColumnBox>
        </FormBox>
      </FirstFormBox>
    </Container>
  );
};

export const Container = styled(FlexBox)`
  width: 100%;
  height: 100%;

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
  width: 100%;
  position: relative;
  h1 {
    width: 100%;
    text-align: left;
  }
`;

export const FirstFormBox = styled(FlexBox)`
  padding: 26px 30px;
  border-bottom: 10px solid #f1f1f2;
  margin: 0 -1px;
  width: 100%;
  padding-left: 60px;
`;

export const FormBox = styled(FlexBox)`
  max-width: 800px;
  width: 100%;
  padding: 8px 0 0;
`;

export const ColumnBox = styled(FlexBox)`
  margin-bottom: 25px;
  width: 800px;
  & > div {
    margin-left: 20px;
  }
`;

export const Label = styled.label`
  width: 140px;
  display: inline-block;
  font-size: 20px;
  font-weight: normal;
  vertical-align: top;
`;
