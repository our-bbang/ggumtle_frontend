import { styled } from 'styled-components';
import { useEffect } from 'react';

import { MainText } from '@components/write/MainText';
import { WriteArea } from '@components/write/WriteArea';
import { ProgressbarWrapper } from '@components/common/Progressbar/ProgressbarWrapper';
import { Progressbar } from '@components/common/Progressbar';

import { useProgress } from '@hooks/useProgress';

export const WritePage = () => {
  const updateProgress = useProgress();

  useEffect(() => {
    updateProgress(0);
  }, []);

  return (
    <WritePageContainer>
      <ProgressbarWrapper>
        <Progressbar />
      </ProgressbarWrapper>
      <MainText />
      <WriteArea />
    </WritePageContainer>
  );
};

const WritePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
