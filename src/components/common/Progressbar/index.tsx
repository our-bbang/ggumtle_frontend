import styled from 'styled-components';

import { ProgressLine } from './ProgressLine';
import { ProgressCircle } from './ProgressCircle';

export const Progressbar = () => {
  return (
    <ProgressbarContainer>
      <ProgressLine />
      <ProgressCircle size="28px" step={1} status="complete" />
      <ProgressCircle size="28px" step={2} />
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
