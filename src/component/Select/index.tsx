import * as React from 'react';
import { InputSize, FieldWrapper, InputWrapper } from './styles';
import styled from 'styled-components';

export type OptionType = { text: string; value: number | string };

interface ISelectProps extends React.InputHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: OptionType[];
  inputSize?: InputSize;
  width: number;
  column?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, ISelectProps>(
  (props, ref) => {
    const { column, width, label, inputSize, options, style, ...selectProps } =
      props;
    return (
      <FieldWrapper column={column}>
        {label && <label>{label}</label>}
        <InputWrapper width={width} isLabel={Boolean(label)}>
          <SelectElement
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
}>`
  background: url(${({ arrow }) => arrow}) no-repeat 95% 50%;
  background-color: #f5f5f5;
  border: none !important;
  border-radius: 4px;
  width: 100%;
  height: 100%;
  padding-left: 4px;
  min-height: 43px;
  /* min-width: 127px;
 */
  text-align: left;
  font-family: Noto Sans KR, sans-serif;
  outline: 0;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
