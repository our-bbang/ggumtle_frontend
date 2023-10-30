import { styled } from 'styled-components';

import { MainLogo } from '@components/landing/MainLogo';
import { BtnBottomContainer } from '@components/common/Buttons/BtnBottomContainer';

import { ResetAtoms } from '@components/landing/ResetAtoms';

export const LandingPage = () => {
  const kakaoLogin = () => {
    console.log(import.meta.env.CLIENT_ID);
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=' +
      import.meta.env.VITE_CLIENT_ID +
      '&redirect_uri=' +
      import.meta.env.VITE_REDIRECT_URL +
      '&response_type=code';
  };

  return (
    <LandingPageContainer>
      <ResetAtoms />
      <MainLogo />
      <BtnBottomContainer>
        <KakaoLoginBtn onClick={kakaoLogin}>
          <img
            src={import.meta.env.BASE_URL + './image/kakao_login_button.png'}
            alt="카카오 로그인"
          />
        </KakaoLoginBtn>
      </BtnBottomContainer>
    </LandingPageContainer>
  );
};

const LandingPageContainer = styled.div`
  position: relative;
`;

const KakaoLoginBtn = styled.button`
  width: 320px;
  border: none;
  background-color: transparent;
  padding: 0;
  img {
    width: 100%;
  }
`;
