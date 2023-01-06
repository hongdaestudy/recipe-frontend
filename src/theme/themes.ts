import { createTheme } from '@mui/material/styles';

const fontSize = 14; // px
// Tell Material-UI what's the font-size on the html element.
// 16px is the default font-size used by browsers.
const htmlFontSize = 16;
const coef = fontSize / 14;

export const theme = createTheme({
  // typography: {
  //   pxToRem: (size: number) => `${(size / htmlFontSize) * coef}rem`,
  // },
  // palette: {
  //   text: '#304156',
  //   white: '#FFFFFF',
  //   skyBlue: '#2EB7FF',
  // },
});

export type Theme = typeof theme;
