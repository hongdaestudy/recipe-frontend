import React from 'react';
import { Icon } from '../Icon';
import styled from 'styled-components';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  isLabel: boolean;
  icon?: string;
  width: number;
  height: number;
  iconWidth?: number;
  iconHeight?: number;
}

export const ImageInput = React.forwardRef<HTMLInputElement, IInputProps>(
  (props, ref) => {
    const {
      isLabel,

      label,
      width,
      height,
      iconWidth,
      iconHeight,
      icon,
      style,
    } = props;

    return (
      <FieldWrapper>
        {isLabel && label && <label htmlFor={label}>{label}</label>}
        <InputWrapper width={width} height={height} isLabel={Boolean(label)}>
          {icon && (
            <Icon
              width={iconWidth || 8}
              height={iconHeight || 8}
              src={icon}
              alt="label"
            />
          )}
          <InputElement
            icon={icon}
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            type="file"
            ref={ref}
            style={{ ...style }}
          />
        </InputWrapper>
      </FieldWrapper>
    );
  },
);

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 15px;
  position: relative;
  label {
    font-size: 16px;
    line-height: 16px;
    /* identical to box height */
    position: absolute;
    z-index: 10;
    left: 10%;
    letter-spacing: 0.916667px;
    text-transform: uppercase;
    margin-bottom: 8px;
    color: #828d99;
  }
`;

export const InputWrapper = styled.div<{
  isLabel: boolean;
  icon?: string;
  width: number;
  height: number;
}>`
  border: none !important;
  box-sizing: border-box;
  background-color: #e1e1e1;
  font-size: 16px;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: Archivo, sans-serif;
  color: #304156;
  position: relative;
  /* img {
    position: absolute;
    top: 30%;
    left: 3%;
  } */
`;

export const InputElement = styled.input<{
  icon?: string;
}>`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
