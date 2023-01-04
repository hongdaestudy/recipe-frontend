import 'styled-components';
import { Theme } from './themes';
import { CSSProp } from 'styled-components';

/* This is the suggested way of declaring theme types */
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module 'react' {
  interface Attributes {
    css?: CSSProp | CSSObject;
  }
}
