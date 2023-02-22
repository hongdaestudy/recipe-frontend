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

export const H3 = styled.h3`
  width: 100%;
  font-size: 14px;
  display: inline-block;
  line-height: 1.8;
  margin-top: 6px;
  color: #999;
  padding: 0 0 0 20px;
  vertical-align: top;
  margin-bottom: 20px;
`;

export const InputBox = styled(FlexBox)`
  margin-left: 25px;
  margin-top: 12px;
`;

export const AddBtn = styled.button`
  border: none;
  font-size: 16px;
  margin-right: 4px;
  cursor: pointer;
  width: 180px;
  transform: translate(-120px, 12px);

  background-color: #ffffff;
  img {
    cursor: pointer;
    width: 18px;
    height: 18px;
  }
`;

export const LineDiv = styled(FlexBox)`
  border-top: 1px solid #e4e4e4 !important;
  padding-top: 15px;
  text-align: center;
  width: 100%;
  color: #f43434;
`;

export const BigAddBtn = styled.button`
  padding: 10px 30px;
  font-size: 18px;
  line-height: 1.3333333;
  border-radius: 3px;
  margin: 10px 4px;
  color: #333;
  border: 1px solid #ccc;
`;
export const BtnSpan = styled.span`
  position: relative;
  &::before {
    content: '\2b';
  }
`;
