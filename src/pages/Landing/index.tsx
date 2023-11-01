import { styled } from 'styled-components';

import { MainLogo } from '@components/landing/MainLogo';
import { BtnBottomContainer } from '@components/common/Buttons/BtnBottomContainer';

import { ResetAtoms } from '@components/landing/ResetAtoms';

export const LandingPage = () => {
  const kakaoLogin = () => {
    window.location.href =
      'https://kauth.kakao.com/oauth/authorize?client_id=' +
      '2841134ed95f82bded9c274a953843bb' +
      '&redirect_uri=' +
      'http://ec2-13-209-45-5.ap-northeast-2.compute.amazonaws.com:3080/api/auth/kakao' +
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
