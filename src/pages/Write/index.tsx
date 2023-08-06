import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { INPUT_PROGRESS } from '@constants/index';

import { MainText } from '@components/write/MainText';
import { WriteArea } from '@components/write/WriteArea';
import { ProgressbarWrapper } from '@components/common/Progressbar/ProgressbarWrapper';
import { Progressbar } from '@components/common/Progressbar';

import { completedProgress, progressPercent } from '@recoil/progress';

export const WritePage = () => {
  const completedProgressStep = useRecoilValue(completedProgress);
  const percent = useRecoilValue(progressPercent);

  return (
    <WritePageContainer>
      <ProgressbarWrapper>
        <Progressbar
          totalProgressStep={INPUT_PROGRESS}
          completedProgressStep={completedProgressStep}
          percent={percent}
        />
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
