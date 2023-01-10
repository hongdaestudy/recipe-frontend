import React from 'react';
import styled from 'styled-components';
import { FlexColumn } from './styles';

export const CompanyDescription = () => {
  return (
    <FlexColumn>
      <MarginedColumn>
        <FlexColumn>
          <P>대표 : 이인경 / E : help@10000recipe.com / F : 02) 323-5049</P>

          <P>서울 금천구 가산동 371-50 에이스하이엔드타워 3차 1106-1호</P>

          <P>문의전화(운영시간 평일 10:00~18:00)</P>

          <P>쇼핑문의(만개스토어) : 02-6953-4433</P>

          <P>서비스 이용문의 : 070-4896-6416</P>
        </FlexColumn>
      </MarginedColumn>

      <MarginedColumn>
        <FlexColumn>
          <P>
            (주)만개의레시피 / 사업자등록번호 291-81-02485 / 통신판매업신고
            2022-서
          </P>

          <P>울금천-3089 / 벤처기업확인 / 사업자정보확인</P>
          <P>서울지방중소기업청 제 031134233-1-01643호</P>
        </FlexColumn>
      </MarginedColumn>

      <MarginedColumn>
        <P>Copyright 만개의레시피 Inc. All Rights Reserved</P>
      </MarginedColumn>
    </FlexColumn>
  );
};

const MarginedColumn = styled(FlexColumn)`
  margin-bottom: 16px;
`;

const P = styled.p`
  margin: 6px;
  padding: 0px;
`;
