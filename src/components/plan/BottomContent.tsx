import styled from 'styled-components';

import { BottomBtn as DownloadImgBtn } from '@components/common/Buttons/BottomBtn';

export const BottomContent = () => {
  const handleClickDownloadBtn = () => {
    console.log('이미지 저장');
  };

  return (
    <BottomContentContainer>
      <DownloadImgBtn
        width="340px"
        borderRadius="30px"
        fontFamily="Pretendard"
        onClick={handleClickDownloadBtn}
      >
        <Icon
          src={import.meta.env.BASE_URL + './icon/camera_icon.svg'}
          alt="카메라"
        />
        만다라트 계획표 이미지로 저장
      </DownloadImgBtn>
    </BottomContentContainer>
  );
};

const Icon = styled.img`
  width: 20px;
  margin-right: 8px;
`;

const BottomContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 580px);

  //background-color: #8cd27b;

  display: flex;
  align-items: center;
  justify-content: center;
`;
