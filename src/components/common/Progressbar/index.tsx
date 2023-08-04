import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { progressStepState } from '@recoil/progress';

import { ProgressLine } from './ProgressLine';
import { ProgressCircle } from './ProgressCircle';

export const Progressbar = () => {
  const steps = useRecoilValue(progressStepState);

  return (
    <ProgressbarContainer>
      <ProgressLine />
      {steps.map((el, idx) => {
        return (
          <ProgressCircle
            size="28px"
            step={idx + 1}
            status={el ? 'complete' : 'incomplete'}
          />
        );
      })}
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
