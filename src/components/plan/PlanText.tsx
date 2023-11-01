import { useState } from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { planresult } from '@recoil/planresult';
import { SmallGoal } from 'src/types/plan';
import { goalState } from '@recoil/goal';

import { Modal as DetailKeywordModal } from '@components/common/Modal';
import { DetailModalContent } from './DetailModalContent';

export const PlanText = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState<SmallGoal>({
    small_goal: '',
    mini1: '',
    mini2: '',
    mini3: '',
    mini4: '',
    cmini1: 0,
    cmini2: 0,
    cmini3: 0,
    cmini4: 0,
    total: 0,
    date: '',
  });

  const goal = useRecoilValue(goalState);
  const plan = useRecoilValue(planresult);

  const handleClickMainKeyword = (key: number) => {
    setIsOpenModal(true);
    if (key === 1) {
      setModalContent(plan?.result[0]);
    } else if (key === 2) {
      setModalContent(plan?.result[1]);
    } else if (key === 3) {
      setModalContent(plan?.result[2]);
    } else if (key === 4) {
      setModalContent(plan?.result[3]);
    }
  };

  return (
    <PlanTextContainer>
      <DetailKeywordModal
        width="280px"
        height="280px"
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      >
        <DetailModalContent modalContent={modalContent} />
      </DetailKeywordModal>
      <GoalContainer>
        <GoalText>{goal}</GoalText>
      </GoalContainer>
      <MainKeyword_TopLeft onClick={() => handleClickMainKeyword(1)}>
        <MainKeywordText>{plan?.result[0]?.small_goal}</MainKeywordText>
      </MainKeyword_TopLeft>
      <MainKeyword_TopRight onClick={() => handleClickMainKeyword(2)}>
        <MainKeywordText>{plan?.result[1]?.small_goal}</MainKeywordText>
      </MainKeyword_TopRight>
      <MainKeyword_BottomLeft onClick={() => handleClickMainKeyword(3)}>
        <MainKeywordText>{plan?.result[2]?.small_goal}</MainKeywordText>
      </MainKeyword_BottomLeft>
      <MainKeyword_BottomRight onClick={() => handleClickMainKeyword(4)}>
        <MainKeywordText>{plan?.result[3]?.small_goal}</MainKeywordText>
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
  border-radius: 8px;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoalText = styled.div`
  text-align: center;

  font-family: 'PretendardMedium';
  font-size: 14px;
  line-height: 15px;
  color: white;
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
