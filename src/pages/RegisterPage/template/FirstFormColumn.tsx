import React from 'react';
import FlexBox from '../../../component/Flex';
import { Icon } from '../../../component/Icon';
import Input from '../../../component/Input/Input';
import { Select } from '../../../component/Select';
import { ColumnBox, FirstFormBox, FormBox, Label } from './styles';
import {
  categoryOption1,
  categoryOption2,
  categoryOption3,
  categoryOption4,
  categoryOption5,
  categoryOption7,
} from './data';
import { ImageInput } from '../../../component/ImageInput';
import { useForm } from 'react-hook-form';
import { FormInput } from '..';

// page 의 state들을 상속
export const FirstFormColumn = () => {
  const { register, watch } = useForm<FormInput>();

  return (
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
  );
};
