import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { BottomBtn as DownloadImgBtn } from '@components/common/Buttons/BottomBtn';

export const BottomContent = () => {
  const navigate = useNavigate();

  const handleClickDownloadBtn = () => {
    navigate('/planimg');
  };

  return (
    <BottomContentContainer>
      <DownloadImgBtn
        width="280px"
        borderRadius="30px"
        fontFamily="Pretendard"
        onClick={handleClickDownloadBtn}
      >
        <Icon
          src={import.meta.env.BASE_URL + './icon/camera_icon.svg'}
          alt="카메라"
        />
        만다라트 계획표 보기
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
