import React, { useState } from 'react';
import styled from 'styled-components';
import FlexBox from '../Flex';
import { ingredients, kinds, methods, situations } from './data';

export interface IFilter {
  kind?: string;
  situation?: string;
  ingredient?: string;
  method?: string;
}

interface IProps {
  updateFilter: (filter: IFilter) => void;
  filter: IFilter;
}

export const ListFilter = ({ updateFilter, filter }: IProps) => {
  const [folded, setFolded] = useState(false);
  return (
    <>
      <table
        style={{
          width: '100%',
          display: folded ? 'none' : 'block',
        }}
      >
        <colgroup>
          <col style={{ width: '7%' }}></col>
          <col></col>
        </colgroup>
        <tbody>
          <tr>
            <td>종류별</td>
            <td>
              <ListWrapper justifyContent="flex-start">
                {kinds.map(kind => {
                  return (
                    <ListItem
                      direction="column"
                      justifyContent="flex-start"
                      key={kind.value}
                      onClick={() => updateFilter({ kind: kind.value })}
                      style={{
                        backgroundColor:
                          filter.kind === kind.value ? '#74b243' : 'white',
                        color: filter.kind === kind.value ? 'white' : 'black',
                      }}
                    >
                      {kind.text}
                    </ListItem>
                  );
                })}
              </ListWrapper>
            </td>
          </tr>
          <tr>
            <td>상황별</td>
            <td>
              <ListWrapper justifyContent="flex-start">
                {situations.map(situation => {
                  return (
                    <ListItem
                      direction="column"
                      justifyContent="flex-start"
                      key={situation.value}
                      onClick={() =>
                        updateFilter({ situation: situation.value })
                      }
                      style={{
                        backgroundColor:
                          filter.situation === situation.value
                            ? '#74b243'
                            : 'white',
                        color:
                          filter.situation === situation.value
                            ? 'white'
                            : 'black',
                      }}
                    >
                      {situation.text}
                    </ListItem>
                  );
                })}
              </ListWrapper>
            </td>
          </tr>
          <tr>
            <td>재료별</td>
            <td>
              <ListWrapper justifyContent="flex-start">
                {ingredients.map(ingredient => {
                  return (
                    <ListItem
                      direction="column"
                      justifyContent="flex-start"
                      key={ingredient.value}
                      onClick={() =>
                        updateFilter({ ingredient: ingredient.value })
                      }
                      style={{
                        backgroundColor:
                          filter.ingredient === ingredient.value
                            ? '#74b243'
                            : 'white',
                        color:
                          filter.ingredient === ingredient.value
                            ? 'white'
                            : 'black',
                      }}
                    >
                      {ingredient.text}
                    </ListItem>
                  );
                })}
              </ListWrapper>
            </td>
          </tr>
          <tr>
            <td>방법별</td>
            <td>
              <ListWrapper justifyContent="flex-start">
                {methods.map(method => {
                  return (
                    <ListItem
                      direction="column"
                      justifyContent="flex-start"
                      key={method.value}
                      onClick={() => updateFilter({ method: method.value })}
                      style={{
                        backgroundColor:
                          filter.method === method.value ? '#74b243' : 'white',
                        color:
                          filter.method === method.value ? 'white' : 'black',
                      }}
                    >
                      {method.text}
                    </ListItem>
                  );
                })}
              </ListWrapper>
            </td>
          </tr>
        </tbody>
      </table>

      <div onClick={() => setFolded(!folded)}>
        카테고리 {folded ? '열기' : '접기'}
      </div>
    </>
  );
};

const ListWrapper = styled(FlexBox)`
  width: 100%;
`;

const ListItem = styled(FlexBox)`
  width: auto;
  margin-right: 10px;
  padding: 5px;
  word-break: kepp-all;
  border-radius: 10px;
`;
