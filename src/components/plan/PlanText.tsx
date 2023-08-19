import { useState } from 'react';
import styled from 'styled-components';

import { useRecoilValue } from 'recoil';
import { goalState } from '@recoil/goal';

import { Modal as DetailKeywordModal } from '@components/common/Modal';

export const PlanText = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const goal = useRecoilValue(goalState);

  const handleClickMainKeyword = (key: number) => {
    setIsOpenModal(true);
    setModalContent(`메인 키워드 ${key}에 대한 세부 키워드`);
  };

  return (
    <PlanTextContainer>
      <DetailKeywordModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      >
        <div>{modalContent}</div>
      </DetailKeywordModal>
      <GoalContainer>
        <GoalText>{goal}</GoalText>
      </GoalContainer>
      <MainKeyword_TopLeft onClick={() => handleClickMainKeyword(1)}>
        <MainKeywordText>메인 키워드1</MainKeywordText>
      </MainKeyword_TopLeft>
      <MainKeyword_TopRight onClick={() => handleClickMainKeyword(2)}>
        <MainKeywordText>메인 키워드2</MainKeywordText>
      </MainKeyword_TopRight>
      <MainKeyword_BottomLeft onClick={() => handleClickMainKeyword(3)}>
        <MainKeywordText>메인 키워드3</MainKeywordText>
      </MainKeyword_BottomLeft>
      <MainKeyword_BottomRight onClick={() => handleClickMainKeyword(4)}>
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
