import { useEffect } from 'react';

import { ProgressbarWrapper } from '@components/common/Progressbar/ProgressbarWrapper';
import { Progressbar } from '@components/common/Progressbar';
import { MainText } from '@components/userinfo/MainText';

import { useProgress } from '@hooks/useProgress';
import { styled } from 'styled-components';

export const UserInfoPage = () => {
  const updateProgress = useProgress();

  useEffect(() => {
    updateProgress(50);
  }, []);

  const handleClickBtn = () => {
    updateProgress(100);
  };

  return (
    <UserInfoPageContainer>
      <ProgressbarWrapper>
        <Progressbar />
      </ProgressbarWrapper>

      <MainText />
      <button onClick={handleClickBtn}>입력 완료</button>
    </UserInfoPageContainer>
  );
};

const UserInfoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
