import styled from 'styled-components';
import { useState } from 'react';
import { PlanLayout } from '@components/plan/PlanLayout';
import { PlanEditLayout } from './PlanEditLayout';
import { BackBtn } from '@components/plan/BackBtn';
import { ViewToggle } from '@components/plan/ViewToggle';

enum PlanView {
  Image = 'Image',
  Graph = 'Graph',
}
export const PlanPage = () => {
  const [view, setView] = useState<PlanView>(PlanView.Image);
  return (
    <PlanPageContainer>
      <BackBtn />
      <ViewToggle view={view} setView={setView} />
      {view === PlanView.Image ? <PlanLayout /> : <PlanEditLayout />}
    </PlanPageContainer>
  );
};

const PlanPageContainer = styled.div`
  position: relative;
`;
