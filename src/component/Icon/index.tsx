import * as React from 'react';
import styled from 'styled-components';

interface IIcon {
  src?: string | URL;
  width: number;
  height: number;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  alt?: string;
}

export const Icon = React.memo(
  ({ src, width, height, style, onClick, alt }: IIcon) => {
    return (
      <IconElement
        onClick={onClick}
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ ...style }}
      />
    );
  },
);

const IconElement = styled.div<IIcon>`
  ${({ src, width, height, onClick }) => `
    width: ${width}px;
    height: ${height}px;
    border-radius: 4px;
    background-image: url(${src});
    background-repeat: no-repeat;
    background-position: center;
    cursor: ${onClick ? 'pointer' : 'auto'};
  `}
`;
