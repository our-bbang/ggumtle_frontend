import { styled } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { MainText } from '@components/write/MainText';
import { WriteArea } from '@components/write/WriteArea';
import { ProgressbarWrapper } from '@components/common/Progressbar/ProgressbarWrapper';
import { Progressbar } from '@components/common/Progressbar';

import { inputProgressState, inputProgressPercent } from '@recoil/progress';

export const WritePage = () => {
  const inputProgress = useRecoilValue(inputProgressState);
  const progressPercent = useRecoilValue(inputProgressPercent);

  return (
    <WritePageContainer>
      <ProgressbarWrapper>
        <Progressbar progressState={inputProgress} percent={progressPercent} />
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
