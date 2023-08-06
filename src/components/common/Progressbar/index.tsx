import styled from 'styled-components';

import { ProgressLine } from './ProgressLine';
import { ProgressCircle } from './ProgressCircle';

interface ProgressbarPropsType {
  totalProgressStep: number;
  completedProgressStep: number;
  percent: number;
}

export const Progressbar = ({
  totalProgressStep,
  completedProgressStep,
  percent,
}: ProgressbarPropsType) => {
  return (
    <ProgressbarContainer>
      <ProgressLine percent={percent} />
      {Array.from({ length: totalProgressStep }, (_, idx) => (
        <ProgressCircle
          key={idx}
          size="28px"
          step={idx + 1}
          status={idx + 1 <= completedProgressStep ? 'complete' : 'incomplete'}
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
