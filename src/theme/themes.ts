// import { PaletteMode } from '@mui/material';
// import { createTheme } from '@mui/material/styles';

export const theme = {
  text: '#304156',
  green: '#73D500',
  textSecondary: 'rgba(58,52,51,0.7)',
  background: 'rgba(255,255,255,1)',
  backgroundVariant: 'rgba(251,249,249,1)',
  border: '#E1E5E9',
  borderLight: 'rgba(58,52,51,0.05)',
  white: '#FFFFFF',
  skyBlue: '#2EB7FF',
  // button
  primaryBtn: '#2EB7FF',
  hoverPrimaryBtn: '#0099fe',
  secondaryBtn: '#304156',
  hoverSecondaryBtn: '#304156',

  lightGray: '#fafbfb',
  lightText: '#828D99',
  boxShadow: 'inset 0 1px 1px rgb(0 0 0 / 8%)',

  // 디자인 시스템 컬러
  red: '#F11650',
  orange: '#FF8D00',
  yellow: '#FFD300',
  mint: '#03C4C6',
  purple: '#C27AEB',

  //gray colors
  gray010: '#FAFBFB',
  gray020: '#F0F1F2',
  gray030: '#E1E5E9',
  gray040: '#D5D8DC',
  gray050: '#BBC0C5',
  gray060: '#989FA6',
  gray070: '#828D99',
  gray080: '#5F6975',
  gray100: '#304156',
  //blue colors
  blue010: '#2EB7FF',
  blue020: '#0099FE',
  blue030: '#0276E3',
  blue040: '#4B688A',
  blue100: '#304156',

  //nav colors
  navIcon: '#475F7B',
  navSelected: '#F2F4F4',

  //surface Colors
  surfacePrimary: '#FFFFFF',
  surfaceSecondary: '##FAFBFB',
  surfaceDisabled: '#475F7B',

  alert: '#FD4D7A',

  dim: '#475f7b80',
};

// export const theme = createTheme({
// typography: {
//   pxToRem: (size: number) => `${(size / htmlFontSize) * coef}rem`,
// },
// palette: {},
// });

export type Theme = typeof theme;
