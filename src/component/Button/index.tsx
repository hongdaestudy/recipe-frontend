import React, { PropsWithChildren } from 'react';

type Size = 'small' | 'medium' | 'large';

// large 169 54  small 73 35 medium 95 46

type Color = {
  primary: '#46ae4f';
  timeActive: '#44b6b5';
  none: '#fff';
  secondary: '#eeeeee';
  secondaryActive: '#6a6f74';
};

// as 로 link 처리

type Props<C extends React.ElementType> = {
  as?: C;
};

type ButtonProps<
  C extends React.ElementType,
  Props,
> = PropsWithChildren<Props> &
  Omit<React.ComponentProps<C>, 'as'> & {
    as?: C;
  };

type BtnProps = {
  size?: Size | 'small';
  color?: Color | 'primary';
};

const defaultElement = 'button';

const Button = <C extends React.ElementType = typeof defaultElement>(
  props: ButtonProps<C, BtnProps>,
) => {
  const {
    as: Component = defaultElement,
    style,
    color,
    children,
    ...rest
  } = props;
  const interalStyles = color ? { style: { ...style, color } } : {};
  return (
    <Component {...rest} {...interalStyles}>
      {children}
    </Component>
  );
};

export default Button;
