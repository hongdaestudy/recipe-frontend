import styled from 'styled-components';
import React from 'react';
import FlexBox from '../../../component/Flex';
import { Label } from './styles';
import Input from '../../../component/Input/Input';
import { useFormContext } from 'react-hook-form';

export const FirstFormBox = styled(FlexBox)`
  padding: 26px 30px;
  border-bottom: 10px solid #f1f1f2;
  margin: 0 -1px;
  width: 100%;
  padding-left: 60px;
`;

export const ForthColumn = () => {
  const { register, watch } = useFormContext();

  return (
    <FirstFormBox direction="column">
      <Wrapper justifyContent="flex-start" alignItems="flex-start">
        <Label>요리팁</Label>
        <Input
          as={'textarea'}
          width={610}
          height={120}
          style={{
            backgroundColor: '#f5f5f5',

            border: '1px solid #e1e1e1',
          }}
          placeholder="예) 고기요리에는 소금보다 설탕을 넣어야 단맛이 겉돌지 않고 육질이 부드러워져요"
        />
      </Wrapper>
    </FirstFormBox>
  );
};

const Wrapper = styled(FlexBox)`
  width: 100%;
`;
