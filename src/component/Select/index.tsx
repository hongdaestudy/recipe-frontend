import * as React from 'react';
import { InputSize, FieldWrapper, InputWrapper } from './styles';
import styled from 'styled-components';

export type OptionType = { text: string; value: number | string };

interface ISelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: OptionType[];
  inputSize: InputSize;
}

export const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  (props, ref) => {
    const { label, inputSize, options, style, ...selectProps } = props;
    return (
      <FieldWrapper>
        {label && <label>{label}</label>}
        <InputWrapper isLabel={Boolean(label)} inputSize={inputSize}>
          <SelectElement
            inputSize={inputSize}
            ref={ref}
            arrow={`${process.env.PUBLIC_URL}/assets/selectArrow.svg`}
            style={{ ...style }}
            {...selectProps}
          >
            {options.map(({ text, value }) => (
              <option key={`option_${value}`} value={value}>
                {text}
              </option>
            ))}
          </SelectElement>
        </InputWrapper>
      </FieldWrapper>
    );
  },
);

const SelectElement = styled.select<{
  arrow: string;
  icon?: string;
  inputSize: InputSize;
}>`
  background: url(${({ arrow }) => arrow}) no-repeat 95% 50%;
  background-color: ${props => props.theme.white};
  border: none !important;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  min-width: 127px;
  min-height: 43px;
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
    -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
