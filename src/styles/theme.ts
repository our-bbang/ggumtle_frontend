import { DefaultTheme } from 'styled-components';

const colors = {
  green: '#4ed99c',
  white: '#ffffff',
  gray_50: '#F7F7FA',
  gray_100: '#F0F0F5',
  gray_200: '#E8E8EE',
  gray_300: '#E1E1E8',
  gray_400: '#CDCED6',
  gray_500: '#A9ABB8',
  gray_600: '#858899',
  gray_700: '#525463',
  gray_800: '#3E404C',
  gray_900: '#2B2D36',
  gray_950: '#252730',
};

export type ColorTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
