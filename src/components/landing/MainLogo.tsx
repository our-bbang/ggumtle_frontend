import styled from 'styled-components';

export const MainLogo = () => {
  return (
    <MainLogoContainer>
      <Content>
        <LogoImg
          src={import.meta.env.BASE_URL + './image/landing_main_logo.svg'}
          alt="꿈틀 로고"
        />
        <MainText>목표 달성을 위한 AI 기반 맞춤형 계획 도우미</MainText>
      </Content>
    </MainLogoContainer>
  );
};

const MainLogoContainer = styled.div`
  //border: 1px solid blue;
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: 30%;
  transform: translate(0, -30%);
`;

const LogoImg = styled.img`
  width: 40%;
`;

const MainText = styled.div`
  margin-top: 24px;

  font-family: 'PretendardSemiBold';
  color: ${({ theme }) => theme.colors.gray_900};
  font-size: 16px;
`;
