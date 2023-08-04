import styled from 'styled-components';
import { IProgress } from '@recoil/progress';

import { ProgressLine } from './ProgressLine';
import { ProgressCircle } from './ProgressCircle';

interface ProgressbarPropsType {
  progressState: IProgress;
  percent: number;
}

export const Progressbar = ({
  progressState,
  percent,
}: ProgressbarPropsType) => {
  return (
    <ProgressbarContainer>
      <ProgressLine percent={percent} />
      <ProgressCircle size="28px" step={1} status={'complete'} />
      {Array.from({ length: progressState.total - 1 }, (_, idx) => (
        <ProgressCircle
          size="28px"
          step={idx + 2}
          status={
            idx + 1 < (progressState.done as number) ? 'complete' : 'incomplete'
          }
        />
      ))}
    </ProgressbarContainer>
  );
};

const ProgressbarContainer = styled.div`
  width: 220px;
  height: 40px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
