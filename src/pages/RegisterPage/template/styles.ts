import styled from 'styled-components';
import FlexBox from '../../../component/Flex';

export const FirstFormBox = styled(FlexBox)`
  padding: 26px 30px;
  border-bottom: 10px solid #f1f1f2;
  margin: 0 -1px;
  width: 100%;
  padding-left: 60px;
`;

export const FormBox = styled(FlexBox)`
  /* max-width: 800px; */
  width: 100%;
  padding: 8px 0 0;
`;

export const ColumnBox = styled(FlexBox)`
  margin-bottom: 25px;
  width: 100%;
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
