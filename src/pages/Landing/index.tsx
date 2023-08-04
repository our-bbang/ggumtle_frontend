import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { MainLogo } from '@components/landing/MainLogo';
import { BottomBtn } from '@components/common/Buttons/BottomBtn';

export const LandingPage = () => {
  const navigate = useNavigate();

  const handleClickStartBtn = () => {
    navigate('/write');
  };

  return (
    <LandingPageContainer>
      <MainLogo />
      <Box>추가 설명</Box>
      <BtnContainer>
        <StartBtn onClick={handleClickStartBtn}>시작하기</StartBtn>
      </BtnContainer>
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

const BtnContainer = styled.div`
  width: 100%;
  max-width: 460px;
  height: 80px;

  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StartBtn = styled(BottomBtn)``;
