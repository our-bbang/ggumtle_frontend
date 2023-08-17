import styled from 'styled-components';

import { TopImgContent } from './TopImgContent';
import { PlanContent } from './PlanContent';
import { BottomContent } from './BottomContent';

export const PlanLayout = () => {
  return (
    <LayoutContainer>
      <TopBackground />
      <BottomBackground />
      <PlanContent />
      <BottomContent />
      <TopImgContent />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  height: 100vh;
  position: relative;
`;

const TopBackground = styled.div`
  width: 100%;
  height: 500px;
  background-color: #ccedff;
`;

const BottomBackground = styled.div`
  width: 100%;
  height: 80px;
  //height: calc(100vh - 500px);
  background-color: #8cd27b;
`;
