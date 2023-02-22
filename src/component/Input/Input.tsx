import React, {
  ChangeEvent,
  ComponentType,
  CSSProperties,
  FC,
  forwardRef,
  MutableRefObject,
  ReactNode,
  Ref,
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';

// <Textarea as="textarea" value={stringState} onChange=onChange ref={ref} />

// custom props

type Size = 'small' | 'medium' | 'large';
type AsProps<C extends React.ElementType> = {
  as?: C;
};
type Color = '#304156' | 'red';

type PropsToOmit<C extends React.ElementType, Props> = keyof (AsProps<C> &
  Props);

type ComponentProps<
  C extends React.ElementType,
  // eslint-disable-next-line @typescript-eslint/ban-types
  Props = {},
> = React.PropsWithChildren<Props & AsProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type TextAreaProps = {
  value?: string; // state text
  className?: string;
  size?: Size | 'small';
  color?: Color | '#304156';
  placeholder?: string;
  ref?: Ref<HTMLTextAreaElement | HTMLInputElement>;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  error?: string;
  style?: CSSProperties;
  height?: number;
  width?: number;
};

type ComponentRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref'];
type ComponentPropsWithRef<C extends React.ElementType, P> = ComponentProps<
  C,
  P
> & { ref?: ComponentRef<C> };

type TextAreaComponent = <C extends React.ElementType>(
  Props: ComponentPropsWithRef<C, TextAreaProps>,
) => React.ReactElement | null;

const Input: TextAreaComponent = React.forwardRef(
  <C extends React.ElementType = 'textarea'>(
    {
      as,
      color,
      size,
      style,
      onChange,
      placeholder,
      value,
      width,
      height,
      ...restProps
    }: ComponentPropsWithRef<C, TextAreaProps>,
    ref?: ComponentRef<C>,
  ) => {
    const Component = as || 'textarea';
    const interalStyles = color ? { styles: { ...style, color } } : {};
    if (as === 'textarea') {
      return (
        <StyledTextArea
          placeholder={placeholder}
          value={value}
          height={height}
          width={width}
          onChange={onChange}
          {...restProps}
          {...interalStyles}
          ref={ref}
        />
      );
    }
    return (
      <StyledInput
        placeholder={placeholder}
        value={value}
        height={height}
        width={width}
        onChange={onChange}
        {...restProps}
        {...interalStyles}
        ref={ref}
      />
    );
  },
);

export const StyledInput = styled.input<{
  height?: number;
  width?: number;
}>`
  width: ${({ width }) => (width ? `${width}px` : '300px')};
  height: ${({ height }) => (height ? `${height}px` : '150px')};
  font-size: 13px;
  background-color: #f5f5f5;
  border: 1px solid #e6e7e8;
  padding-left: 10px;
  padding-right: 10px;
`;

export const StyledTextArea = styled.textarea<{
  height?: number;
  width?: number;
}>`
  width: ${({ width }) => (width ? `${width}px` : '300px')};
  height: ${({ height }) => (height ? `${height}px` : '150px')};
  font-size: 13px;
  background-color: #f5f5f5;
  border: 1px solid #e6e7e8;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
`;

export default Input;
