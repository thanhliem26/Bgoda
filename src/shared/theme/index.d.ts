import 'styled-components';
import { ThemeType } from './index'; // Đường dẫn chính xác đến theme

/* eslint-disable */
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}