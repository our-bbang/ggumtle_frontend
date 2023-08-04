import styled from 'styled-components';
import { ReactNode, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  /**
   * mobile height size 설정
   */
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  return (
    <LayoutContainer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  border: 1px solid black;
  width: 100%;
  max-width: 460px;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0px auto;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`;
