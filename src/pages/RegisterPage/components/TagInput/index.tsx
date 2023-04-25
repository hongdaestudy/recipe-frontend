import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

export interface TagInputProps {
  tags: Array<{ id: string; tag: string }>;
  setTags: React.Dispatch<React.SetStateAction<{ id: string; tag: string }[]>>;
}

export const TagInput = ({ tags, setTags }: TagInputProps) => {
  const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === 'Enter' &&
      (event.target as HTMLInputElement).value !== ''
    ) {
      setTags([
        ...tags,
        { tag: (event.target as HTMLInputElement).value, id: uuidv4() },
      ]);
      (event.target as HTMLInputElement).value = '';
    }
  };

  const removeTag = (id: string) => {
    // const tag = tags.indexOf(tag)
    setTags([...tags.filter(tag => tag.id !== id)]);
  };

  return (
    <Container>
      <Ul>
        {tags.map(({ tag, id }) => {
          return (
            <Li onClick={() => removeTag(id)} key={`${tag}_${id}`}>
              {tag}
            </Li>
          );
        })}
      </Ul>
      <Input
        style={{
          // minHeight: '50px',
          flex: '1',
          backgroundColor: '#f5f5f5',

          border: '1px solid #e1e1e1',
        }}
        onKeyUp={addTags}
        height={50}
        width={620}
        type="text"
        placeholder=""
      />
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  min-height: 48px;
  background-color: #f5f5f5;
  width: 480px;
  border: 1px solid rgb(214, 216, 218);
  border-radius: 6px;
  &:focus-within {
    /* border: 1px solid #0052cc; */
  }
`;

export const Ul = styled.ul`
  padding: 0;
  background-color: #f5f5f5;
  /* background-color: rgb(245, 245, 245); */
  border: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 8px 0 0 0;
`;

export const Li = styled.li`
  width: auto;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #078b11;
  cursor: pointer;
  padding: 0 8px;
  font-size: 14px;
  border: 1px solid #cccccc;
  list-style: none;
  border-radius: 6px;
  margin-left: 8px;
  /* margin: 0px; */
  background-color: rgb(245, 245, 245);
  /* background: #f6f6f6; */
`;

export const Input = styled.input`
  flex: 1;
  border: none !important;
  background-color: rgb(245, 245, 245);
  height: 48px;
  font-size: 14px;
  padding: 4px 0 0 0;

  &:focus {
    outline: transparent;
  }
`;
