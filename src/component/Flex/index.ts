import styled from 'styled-components';
/**
 * 레이아웃 구성 시 플렉스 박스를 쉽게 사용하기 위해 구성
 * default 속성은 center  , direction 은 row
 *
 **/
interface IFlexBox {
  direction?: 'row' | 'column';
  alignItems?: 'flex-start' | 'flex-end' | 'stretch' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

const FlexBox = styled.div<IFlexBox>`
  display: flex;
  flex-direction: ${props => (props.direction ? props.direction : 'row')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
`;

export default FlexBox;
