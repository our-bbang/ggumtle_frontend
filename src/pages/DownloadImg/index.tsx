import styled from 'styled-components';
import { useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toPng } from 'html-to-image';

import { PlanImg } from '@components/planimg';
import { BottomBtn } from '@components/common/Buttons/BottomBtn';

export const DownloadImgPage = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  const handleClickDownloadBtn = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-mandalart-plan.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  const handleClickGoHomeBtn = () => {
    navigate('/');
  };

  return (
    <Container>
      <PlanImg refLink={ref} />
      <BottomBtn
        width="160px"
        height="36px"
        fontSize="14px"
        fontFamily="Pretendard"
        onClick={handleClickDownloadBtn}
      >
        <Icon
          src={import.meta.env.BASE_URL + './icon/download_icon.svg'}
          alt="다운로드"
        />
        이미지 다운로드
      </BottomBtn>
      <Divider />
      <BottomBtn
        width="160px"
        height="36px"
        fontSize="14px"
        fontFamily="Pretendard"
        onClick={handleClickGoHomeBtn}
      >
        <Icon
          src={import.meta.env.BASE_URL + './icon/home_icon.svg'}
          alt="홈"
        />
        처음으로 돌아가기
      </BottomBtn>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;
`;

const Icon = styled.img`
  width: 18px;
  margin-right: 4px;
`;

const Divider = styled.div`
  height: 10px;
`;
