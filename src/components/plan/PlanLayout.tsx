import styled from 'styled-components';

import { TopImgContent } from './TopImgContent';
import { PlanContent } from './PlanContent';

export const PlanLayout = () => {
  return (
    <LayoutContainer>
      {/*background 색깔용*/}
      <TopBackground />
      <BottomBackground />
      {/*계획표 이미지, 텍스트*/}
      <PlanContent />
      {/*상단 이미지들*/}
      <TopImgContent />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  padding-top: 40px;
  height: 100vh;
  position: relative;
  background-color: #ccedff;
`;

const TopBackground = styled.div`
  width: 100%;
  height: 500px;
  background-color: #ccedff;
`;

const BottomBackground = styled.div`
  width: 100%;
  height: 100%;
  //height: calc(100vh - 500px);
  background-color: #8cd27b;
`;
