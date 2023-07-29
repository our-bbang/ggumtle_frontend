import { styled } from 'styled-components';

import { MainLogo } from '@components/landing/MainLogo';
import { BottomStartBtn } from '@components/landing/BottomStartBtn';

export const LandingPage = () => {
  return (
    <LandingPageContainer>
      <MainLogo />
      <Box>추가 설명</Box>
      <BottomStartBtn />
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  position: relative;
`;

const Box = styled.div`
  width: 100%;
  height: 1000px;
  background-color: lightgray;
`;
