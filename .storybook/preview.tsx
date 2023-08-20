import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../src/styles/global-style';
import GlobalFonts from '../src/assets/fonts';
import { theme as colortheme } from '../src/styles/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={colortheme}>
      <GlobalStyle />
      <GlobalFonts />
      <Story />
    </ThemeProvider>
  ),
];

export default preview;
