import styled from 'styled-components';
import React, { useState } from 'react';
import FlexBox from '../../../component/Flex';
import { Label } from './styles';
import Input from '../../../component/Input/Input';
import { useFormContext } from 'react-hook-form';
import { TagInput } from '../components/TagInput';

export const FirstFormBox = styled(FlexBox)`
  padding: 26px 30px;
  border-bottom: 10px solid #f1f1f2;
  margin: 0 -1px;
  width: 100%;
  padding-left: 60px;
`;

export const FifthColumn = () => {
  const { register, watch } = useFormContext();
  const [tags, setTags] = useState<Array<{ id: string; tag: string }>>([]);
  return (
    <FirstFormBox direction="column">
      <Wrapper justifyContent="flex-start" alignItems="flex-start">
        {/* 태그 기능 구현 */}
        <Label>태그</Label>
        <TagInput tags={tags} setTags={setTags} />
      </Wrapper>
      <Wrapper justifyContent="flex-start">
        <span>
          주재료, 목적, 효능, 대상 등을 태그로 남겨주세요.
          <em>예) 돼지고기, 다이어트, 비만, 칼슘, 감기예방, 이유식, 초간단</em>
        </span>
      </Wrapper>
    </FirstFormBox>
  );
};

const Wrapper = styled(FlexBox)`
  width: 100%;
  span {
    color: rgb(102, 102, 102);
    margin-left: 140px;
    margin-top: 20px;
    em {
      color: #999;
      padding-left: 8px;
    }
  }
`;
