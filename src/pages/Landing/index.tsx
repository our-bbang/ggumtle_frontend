import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { MainLogo } from '@components/landing/MainLogo';
import { BtnBottomContainer } from '@components/common/Buttons/BtnBottomContainer';
import { BottomBtn } from '@components/common/Buttons/BottomBtn';

import { ResetAtoms } from '@components/landing/ResetAtoms';

import { DetailModalContent } from '@components/plan/DetailModalContent';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickStartBtn = () => {
    navigate('/write');
  };

  return (
    <LandingPageContainer>
      <ResetAtoms />
      <MainLogo />
      <DetailModalContent />
      <Box>추가 설명</Box>

      <BtnBottomContainer>
        <StartBtn onClick={handleClickStartBtn}>시작하기</StartBtn>
      </BtnBottomContainer>
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

const StartBtn = styled(BottomBtn)``;
