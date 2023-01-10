import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeadWrapper = styled.header`
  width: 100%;
  height: 160px;
  background-color: #fff;
`;

export const NestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 112px;
  margin-top: 0;
  justify-content: center;
  align-items: center;
`;

export const HomeLink = styled(Link)`
  color: #333;
  text-decoration: none;
  background-color: transparent;
  margin: 0 30px 0 0;
  display: inline-block;
  vertical-align: top;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  width: 450px;
  padding-top: -5px;
`;

export const SearchForm = styled.form`
  display: flex;
  margin-top: 0em;
  width: 100%;
  height: 38px;
  div {
    padding: 0;
    width: 100%;
    position: relative;
    display: flex;
  }
`;

export const SearchInput = styled.input`
  height: 38px;
  border: 1px solid #ccc;
  background-color: #fbfbfb;
  width: 100%;
  margin-bottom: 0;
  font-size: 14px;
  color: #555;
  padding: 6px 12px;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
`;

export const SearchBtn = styled.span`
  position: absolute;
  width: 64px;
  background-color: #74b243;
  border: 1px solid #68a13a;
  height: 38px;
  border-radius: 4px;
  right: 0;
  img {
    width: 100%;
    height: 100%;
    padding: 8%;
  }
`;
