import React, { useEffect, useState } from 'react';
import {
  useForm,
  FormProvider,
  useFormContext,
  SubmitHandler,
} from 'react-hook-form';
import styled from 'styled-components';
import FlexBox from '../../component/Flex';
import { Icon } from '../../component/Icon';
import { Select } from '../../component/Select';
import { FifthColumn } from './template/FifthColumn';
// import { FirstFormColumn } from './template/FirstFormColumn';
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
import { FirstFormColumn } from './template/FirstFormColumn';

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
  // const { register, watch, handleSubmit } = useForm<FormInput>();
  const methods = useForm<FormInput>();
  const [imagePreview, setImagePreview] = useState<string>('');
  const [urlThumbnail, setUrlThumbnail] = useState<string>('');
  const recipeImage = methods.watch('recipeImage');

  useEffect(() => {
    if (recipeImage && recipeImage.length > 0) {
      const file = recipeImage[0] as unknown as Blob;

      setImagePreview(URL.createObjectURL(file) as string);
    }
  }, [recipeImage]);

  console.log(imagePreview);

  const onSubmit: SubmitHandler<FormInput> = data => {
    console.log(data);
  };

  return (
    <Container direction="column">
      <TopBox>
        <h1>레시피 등록</h1>
      </TopBox>
      <FormProvider {...methods}>
        <FormWrapper onSubmit={methods.handleSubmit(onSubmit)}>
          <FirstFormColumn
            imagePreview={imagePreview}
            setImagePreview={setImagePreview}
            setUrlThumbnail={setUrlThumbnail}
            urlThumbNail={urlThumbnail}
          />

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
      </FormProvider>
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

export const ImageInputWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  cursor: pointer;
  border: none;
  background-color: #f5f5f5;
  color: #ccc;
`;

export const ImagePreview = styled.img`
  width: 250px;
  height: 250px;
  cursor: pointer;
`;

export const TitleImageInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
`;
