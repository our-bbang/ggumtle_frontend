import styled from 'styled-components';
import { PlanImg } from '@components/planimg';
import { PlanEditContent } from '@components/planedit/PlanEditContent';

export const PlanEditLayout = () => {
  return (
    <PlanEditLayoutContainer>
      <PlanImg />
      <PlanEditContent />
    </PlanEditLayoutContainer>
  );
};

const PlanEditLayoutContainer = styled.div`
  padding-top: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
