import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';
import FlexBox from '../../component/Flex';
import { Icon } from '../../component/Icon';
import { Select } from '../../component/Select';
import { FifthColumn } from './template/FifthColumn';
import { FirstFormColumn } from './template/FirstFormColumn';
import { ForthColumn } from './template/ForthColumn';
import { SecondFormField } from './template/SecondFormField';
import { ThirdFormColumn } from './template/ThirdFormColumn';

import {
  categoryOption1,
  categoryOption2,
  categoryOption3,
  categoryOption4,
  categoryOption5,
  categoryOption7,
} from './template/data';
import { ImageInput } from '../../component/ImageInput';
import { ColumnBox, FirstFormBox, FormBox, Label } from './template/styles';
import Input from '../../component/Input/Input';

export interface FormInput {
  recipeTitle: string;
  recipeDescription: string;
  videoUrl: string | URL;
  recipeImage: string; // 요리 대표 사진
  // 카테고리 셀렉트
  category: string; // 종류별
  occasion: string; // 상황별
  method: string; // 방법별
  ingredient: string; // 재료별
  totalNumber: string; // 몇 인분 인지
  infoTime: string; // 요리 정보에서의 시간
  difficulty: string; // 상 중 하 난이도
}
// TODO.
// first column useForm 기능 구현
// second column에서 useFieldArray 로 기능 구현
// third column

// 포커스 지나가면 태그 자동 생성 기능

export const RegisterPage = () => {
  const { register, watch, handleSubmit } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = data => {
    console.log(data);
  };

  return (
    <Container direction="column">
      <TopBox>
        <h1>레시피 등록</h1>
      </TopBox>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        {/* <FirstFormColumn /> */}
        <FirstFormBox justifyContent="flex-start">
          <FormBox justifyContent="space-around">
            <FlexBox
              style={{ width: '80%' }}
              direction="column"
              justifyContent="flex-start"
            >
              <ColumnBox justifyContent="flex-start">
                <Label>레시피 제목</Label>
                <Input
                  {...register('recipeTitle')}
                  as={'input'}
                  width={610}
                  height={50}
                  style={{
                    backgroundColor: '#f5f5f5',
                    // paddingLeft: '6px 12px',
                    border: '1px solid #e1e1e1',
                  }}
                  placeholder="예)소고기 미역국 끓이기"
                />
              </ColumnBox>
              <ColumnBox justifyContent="flex-start">
                <Label>요리 소개</Label>
                <Input
                  as={'textarea'}
                  {...register('recipeDescription')}
                  width={610}
                  height={100}
                  style={{
                    fontSize: '16px',
                    backgroundColor: '#f5f5f5',
                    // paddingLeft: '6px 12px',
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
                  {...register('videoUrl')}
                  width={380}
                  height={100}
                  style={{
                    resize: 'none',
                    fontSize: '16px',
                    backgroundColor: '#f5f5f5',
                    // paddingLeft: '6px 12px',
                    border: '1px solid #e1e1e1',
                    marginRight: '10px',
                  }}
                  placeholder="동영상이 있으면 주소를 입력하세요.
              (Youtube,네이버tvcast,다음tvpot 만 가능) 예)http://youtu.be/lA0Bxo3IZmM"
                />
                <div>
                  {/* thumbnail 등록 후 아이콘 제거  */}
                  <Icon
                    width={178}
                    height={100}
                    src={`${process.env.PUBLIC_URL}/assets/pic_none5.gif`}
                  />
                </div>
              </ColumnBox>
              <ColumnBox justifyContent="flex-start">
                <Label>카테고리</Label>
                <FlexBox justifyContent="flex-start" style={{ width: '100%' }}>
                  <Select
                    {...register('category')}
                    width={125}
                    options={categoryOption1}
                  />
                  <Select
                    {...register('occasion')}
                    width={117.5}
                    options={categoryOption2}
                  />
                  <Select
                    {...register('method')}
                    width={85.5}
                    options={categoryOption3}
                  />
                  <Select
                    {...register('ingredient')}
                    width={106}
                    options={categoryOption4}
                  />
                </FlexBox>
              </ColumnBox>
              <ColumnBox justifyContent="flex-start">
                <Label>요리정보</Label>
                <FlexBox justifyContent="flex-start" style={{ width: '100%' }}>
                  <Select
                    {...register('totalNumber')}
                    column={false}
                    label="인원"
                    width={86}
                    options={categoryOption5}
                  />
                  <Select
                    column={false}
                    width={86}
                    {...register('infoTime')}
                    label={'시간'}
                    style={{ transform: "translateX('14px')" }}
                    options={categoryOption2}
                  />
                  <Select
                    column={false}
                    {...register('difficulty')}
                    width={92}
                    style={{ transform: "translateX('14px')" }}
                    label={'난이도'}
                    options={categoryOption7}
                  />
                </FlexBox>
              </ColumnBox>
            </FlexBox>
            <FlexBox
              style={{
                height: '100%',
                marginRight: '15px',
                transform: ' translateY(-120px)',
              }}
              alignItems="flex-start"
            >
              <ImageInput
                label="요리대표사진을 등록해 주세요"
                isLabel={true}
                placeholder="요리대표사진을 등록해 주세요"
                width={250}
                height={250}
              />
            </FlexBox>
          </FormBox>
        </FirstFormBox>
        <SecondFormField />
        <ThirdFormColumn />

        <ForthColumn />
        <FifthColumn />
        <FirstFormBox>
          <SubmitBtn>저장</SubmitBtn>
          <SubmitOpenBtn>저장 후 공개하기</SubmitOpenBtn>
          <CancelBtn>취소</CancelBtn>
        </FirstFormBox>
      </FormWrapper>
    </Container>
  );
};

export const FormWrapper = styled.form`
  width: 100%;
`;
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

export const SubmitBtn = styled.button`
  padding: 12px 50px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 3px;
  margin: 0 4px;
  color: #fff;
  background-color: #46ae4f;
  border: 1px solid #497725;
`;

export const SubmitOpenBtn = styled(SubmitBtn)`
  background-color: #f0ad4e;
  border: 1px solid #d88e24;
`;

export const CancelBtn = styled(SubmitBtn)`
  color: #333;
  background-color: #fff;
  border: 1px solid #ccc;
`;
