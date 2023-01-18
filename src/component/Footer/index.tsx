import * as React from 'react';
import styled from 'styled-components';
import { CompanyDescription } from './CompanyDescription';
import { FlexColumn, FlexRow } from './styles';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FlexRow>
        <FlexColumn>
          <CompanyLink />
          <CompanyDescription />
        </FlexColumn>
      </FlexRow>
      {/* <FlexRow>
        <FlexColumn>
          <CompanyLink />
          <CompanyDescription />
        </FlexColumn>
      </FlexRow> */}
    </FooterWrapper>
  );
};

const HalpWrapper = styled(FlexRow)``;

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  /* position: fixed;
  bottom: 0;
  z-index: 999; */
  align-items: center;
  padding: 24px;
  width: 100%;
  font-size: 13px;
  background: #fff;
  margin-top: 30px;
  color: #999;
  border-top: 1px solid #dcdcdc;
`;

const CompanyLink = () => {
  const id = React.useId();
  return (
    <CompanyPart>
      {['회사소개', '광고문의', '개인정보처리방침', '이용약관', '고객센터'].map(
        str => {
          return (
            <React.Fragment key={id + `${str}`}>
              <CompanySpan>{str}</CompanySpan>
              <Slash>|</Slash>
            </React.Fragment>
          );
        },
      )}
    </CompanyPart>
  );
};

const CompanyPart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 16px;
`;
const CompanySpan = styled.span`
  color: inherit;
  font-size: 13px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
`;

const Slash = styled.span`
  color: #ddd;
  padding: 0 8px;
`;
