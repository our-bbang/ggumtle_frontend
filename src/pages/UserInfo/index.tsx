import { useEffect } from 'react';

import { ProgressbarWrapper } from '@components/common/Progressbar/ProgressbarWrapper';
import { Progressbar } from '@components/common/Progressbar';

import { useProgress } from '@hooks/useProgress';

export const UserInfoPage = () => {
  const updateProgress = useProgress();

  useEffect(() => {
    updateProgress(50);
  }, []);

  const handleClickBtn = () => {
    updateProgress(100);
  };

  return (
    <>
      <ProgressbarWrapper>
        <Progressbar />
      </ProgressbarWrapper>

      <div>유저 정보 입력</div>
      <button onClick={handleClickBtn}>입력 완료</button>
    </>
  );
};
