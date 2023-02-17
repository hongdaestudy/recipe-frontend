import styled from 'styled-components';

export type InputSize = 'large' | 'medium' | 'small';

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  label {
    font-size: 16px;
    line-height: 16px;
    /* identical to box height */

    letter-spacing: 0.916667px;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: #828d99;
  }
`;

export const InputWrapper = styled.div<{
  inputSize: InputSize;
  isLabel: boolean;
  icon?: string;
}>`
  border: 1px solid #e1e5e8;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  font-family: Archivo, sans-serif;
  color: #304156;
  position: relative;
  img {
    position: absolute;
    top: 30%;
    left: 3%;
  }
  ${({ inputSize }) =>
    inputSize === 'large' &&
    `
    width: 368px;
    height: 36px;
    img {
      width: 17.81px;
      height: 17.81px;
    }
      `}
  ${({ inputSize }) =>
    inputSize === 'medium' &&
    `
    background: #F0F1F2;
    width: 224px;
    height: 40px;
    
      `}
  ${({ inputSize, isLabel }) =>
    inputSize === 'small' &&
    isLabel &&
    `
    width: 180px;
    height: 36px;
    img {
      width: 17.81px;
      height: 17.81px;
    }

      `}
`;

export const InputElement = styled.input<{
  icon?: string;
  inputSize: InputSize;
}>`
  border: none !important;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  text-align: left;
  font-family: Noto Sans KR, sans-serif;
  outline: 0;
  ${({ icon }) =>
    icon &&
    `
    margin-left: 16px;
  `}
  ${({ icon, inputSize }) =>
    icon &&
    inputSize === 'large' &&
    `
    margin-left: 17.14px;
  `}
  ${({ icon, inputSize }) =>
    icon &&
    inputSize === 'small' &&
    `
    margin-left: 15px;
  `}
  ${({ inputSize }) =>
    inputSize === 'large' &&
    `
    padding: 6px 12px;
    &::-webkit-input-placeholder {
      font-family: Noto Sans KR, sans-serif;
      color: #304156;
      opacity: 0.5;
      font-size: 20px;

    }
    &::-moz-placeholder {
      font-family: Noto Sans KR, sans-serif;
      color: #304156;
      opacity: 0.5;
      font-size: 20px;
    }
    &::-ms-input-placeholder {
      font-family: Noto Sans KR, sans-serif;
      color: #304156;
      opacity: 0.5;
      font-size: 20px;
    }
    `}
  ${({ inputSize }) =>
    inputSize === 'medium' &&
    `
    padding: 11px 16px;
    background: #F0F1F2;
    &::-webkit-input-placeholder {
      font-family: Roboto;
      color: #989FA6;
      font-size: 17px;

    }
    &::-moz-placeholder {
      font-family: Roboto;
      color: #989FA6;
      font-size: 17px;
    }
    &::-ms-input-placeholder {
      font-family: Roboto;
      color: #989FA6;
      font-size: 17px;
    }
    `}
    ${({ inputSize }) =>
    inputSize === 'small' &&
    `
    padding: 6px 12px;
    &::-webkit-input-placeholder {
      font-family: Archivo;
      color: #989FA6;
      font-size: 20px;

    }
    &::-moz-placeholder {
      font-family: Archivo;
      color: #989FA6;
      font-size: 20px;
    }
    &::-ms-input-placeholder {
      font-family: Archivo;
      color: #989FA6;
      font-size: 20px;
    }
    `}
`;
