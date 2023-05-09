import React from 'react';
import FlexBox from '../../../component/Flex';
import Input from '../../../component/Input/Input';
import {
  AddBtn,
  BigAddBtn,
  BtnSpan,
  ColumnBox,
  FirstFormBox,
  H3,
  InputBox,
  LineDiv,
} from './styles';
import AddIcon from '../../../../public/assets/add_icon.png';
import { useFormContext, useFieldArray } from 'react-hook-form';

export const SecondFormField = () => {
  const { register, control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ingredient',
  });

  return (
    <FirstFormBox direction="column">
      <H3>재료가 남거나 부족하지 않도록 정확한 계량정보를 적어주세요.</H3>
      <FlexBox style={{ width: '100%' }}>
        {/* TODO drag event */}
        <ColumnBox alignItems="flex-start" justifyContent="flex-start">
          <FlexBox
            style={{ minHeight: '200px', marginTop: '10px' }}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Input
              as="input"
              width={210}
              value={'재료'}
              height={50}
              style={{ backgroundColor: '#fffdd7' }}
            />
          </FlexBox>

          <FlexBox direction="column">
            <FlexBox direction="column">
              {fields.map((item, index) => {
                return (
                  <FlexBox
                    key={item.id}
                    style={{ width: '100%' }}
                    direction="column"
                    alignItems="flex-start"
                  >
                    {/* fields array로 구현 */}

                    <InputBox
                      style={{ width: '100%' }}
                      justifyContent="flex-start"
                    >
                      <Input
                        {...register(`ingredient.${index}.one`)}
                        as={'input'}
                        placeholder="예)돼지고기"
                        width={330}
                        height={50}
                      />
                      <Input
                        as={'input'}
                        {...register(`ingredient.${index}.two`)}
                        placeholder="예)300g"
                        width={330}
                        style={{ marginLeft: '25px' }}
                        height={50}
                      />
                    </InputBox>

                    {/* TODO react-hook-form nestedArray example study */}
                  </FlexBox>
                );
              })}
            </FlexBox>

            <InputBox style={{ width: '100%', transform: 'translateX(50%)' }}>
              <AddBtn
                onClick={() =>
                  append({
                    one: '',
                    two: '',
                  })
                }
              >
                <img
                  src={`${process.env.PUBLIC_URL}/assets/add_icon.png`}
                  alt={'addIcon'}
                />
                추가
              </AddBtn>
            </InputBox>
          </FlexBox>
        </ColumnBox>
      </FlexBox>
      <LineDiv direction="column">
        <h3>
          ※ 양념, 양념장, 소스, 드레싱, 토핑, 시럽, 육수 밑간 등으로 구분해서
          작성해주세요.
        </h3>
        <BigAddBtn>
          <BtnSpan />
          재료/양념 묶음 추가
        </BigAddBtn>
      </LineDiv>
    </FirstFormBox>
  );
};
