import styled from 'styled-components';

import { TopImgContent } from './TopImgContent';
import { PlanContent } from './PlanContent';
import { BottomContent } from './BottomContent';

export const PlanLayout = () => {
  return (
    <LayoutContainer>
      {/*background 색깔용*/}
      <TopBackground />
      <BottomBackground />
      {/*계획표 이미지, 텍스트*/}
      <PlanContent />
      {/*이미지 저장 버튼*/}
      <BottomContent />
      {/*상단 이미지들*/}
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
