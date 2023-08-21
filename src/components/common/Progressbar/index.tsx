import styled from 'styled-components';

import { ProgressLine } from './ProgressLine';
import { ProgressCircle } from './ProgressCircle';

interface ProgressbarPropsType {
  /**
   * Total number of progress steps
   */
  totalProgressStep: number;
  /**
   * Number of completed progress steps
   */
  completedProgressStep: number;
  /**
   * Percentage of completed progress
   */
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
