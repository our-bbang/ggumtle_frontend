import styled from 'styled-components';

interface LogoPropsType {
  type: 'square' | 'main';
}
export const Logo = ({ type }: LogoPropsType) => {
  if (type === 'square') {
    return (
      <LogosContainer>
        <SquareLogo
          src={import.meta.env.BASE_URL + './logo/square_logo_green.svg'}
          alt="꿈틀 로고"
        />
        <SquareLogo
          src={import.meta.env.BASE_URL + './logo/square_logo_red.svg'}
          alt="꿈틀 로고"
        />
      </LogosContainer>
    );
  }

  return (
    <LogosContainer>
      <MainLogo
        src={import.meta.env.BASE_URL + './logo/main_logo_green.svg'}
        alt="꿈틀 로고"
      />
      <MainLogo
        src={import.meta.env.BASE_URL + './logo/main_logo_dark.svg'}
        alt="꿈틀 로고"
      />
      <MainLogo
        src={import.meta.env.BASE_URL + './logo/main_logo_red.svg'}
        alt="꿈틀 로고"
      />
    </LogosContainer>
  );
};

const LogosContainer = styled.div`
  display: flex;
`;

const MainLogo = styled.img`
  width: 120px;
  margin: 20px;
`;

const SquareLogo = styled.img`
  width: 100px;
  margin: 20px;
`;
