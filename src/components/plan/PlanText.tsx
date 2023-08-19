import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { goalState } from '@recoil/goal';

export const PlanText = () => {
  const goal = useRecoilValue(goalState);

  return (
    <PlanTextContainer>
      <GoalContainer>
        <GoalText>{goal}</GoalText>
      </GoalContainer>
      <MainKeyword_TopLeft>
        <MainKeywordText>메인 키워드1</MainKeywordText>
      </MainKeyword_TopLeft>
      <MainKeyword_TopRight>
        <MainKeywordText>메인 키워드2</MainKeywordText>
      </MainKeyword_TopRight>
      <MainKeyword_BottomLeft>
        <MainKeywordText>메인 키워드3</MainKeywordText>
      </MainKeyword_BottomLeft>
      <MainKeyword_BottomRight>
        <MainKeywordText>메인 키워드4</MainKeywordText>
      </MainKeyword_BottomRight>
    </PlanTextContainer>
  );
};

const PlanTextContainer = styled.div`
  position: absolute;

  width: 100%;
  height: 580px;
  top: 0;
`;

const GoalContainer = styled.div`
  position: absolute;
  top: 46%;
  left: 51%;
  transform: translate(-51%, -46%);

  width: 90px;
  height: 90px;
  padding: 6px;
  border-radius: 8px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoalText = styled.div`
  text-align: center;

  font-family: 'PretendardMedium';
  font-size: 14px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.gray_900};
  word-wrap: keep-all;
`;

const MainKeywordContainer = styled.div`
  position: absolute;

  width: 58px;
  height: 58px;
  border-radius: 6px;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
`;

const MainKeyword_TopLeft = styled(MainKeywordContainer)`
  top: 151px;
  left: 45px;
`;

const MainKeyword_TopRight = styled(MainKeywordContainer)`
  top: 151px;
  right: 42px;
`;

const MainKeyword_BottomLeft = styled(MainKeywordContainer)`
  top: 328px;
  left: 45px;
`;

const MainKeyword_BottomRight = styled(MainKeywordContainer)`
  top: 328px;
  right: 42px;
`;

const MainKeywordText = styled.div`
  text-align: center;

  font-family: 'PretendardMedium';
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme }) => theme.colors.gray_900};
  word-wrap: keep-all;
`;
