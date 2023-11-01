import styled from 'styled-components';
import { Modal } from '@components/common/Modal';
import { ModalHeader, HeaderContent, CloseBtn } from './EditModal';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userInfoState } from '@recoil/goal';

import { patchPlan, getDetailPlan } from '@api/planAPIS';
import { planresult } from '@recoil/planresult';

interface DoneModalProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  plan: string;
  main_id: string;
  mini_num: number;
  mini_goal: string;
}
export const DoneModal = ({
  isOpenModal,
  setIsOpenModal,
  plan,
  main_id,
  mini_num,
  mini_goal,
}: DoneModalProps) => {
  const userInfo = useRecoilValue(userInfoState);
  const setPlanResult = useSetRecoilState(planresult);

  const handleClickBtn = (value: number) => {
    const response = patchPlan(userInfo.email, plan, main_id, mini_num, value);
    response
      .then(() => {
        const planresult = getDetailPlan(userInfo.email, main_id);
        planresult.then((res) => {
          setPlanResult(res);
        });
        setIsOpenModal(false);
      })
      .catch(() => {
        setIsOpenModal(false);
      });
  };

  return (
    <Modal
      width="320px"
      height="200px"
      padding="16px 24px"
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
    >
      <DoneModalContainer>
        <ModalHeader>
          <HeaderContent>목표 완료</HeaderContent>
          <CloseBtn
            onClick={() => {
              setIsOpenModal(false);
            }}
          >
            <img
              src={import.meta.env.BASE_URL + './icon/close_icon.svg'}
              alt="닫기"
            />
          </CloseBtn>
        </ModalHeader>
        <PlanContent>
          <PlanText>"{mini_goal}"</PlanText>
          <GuideText>목표를 완료하셨나요?</GuideText>
        </PlanContent>
        <BottomBtnContainer>
          <CancelBtn
            onClick={() => {
              handleClickBtn(0);
            }}
          >
            아직이에요
          </CancelBtn>
          <DoneBtn
            onClick={() => {
              handleClickBtn(1);
            }}
          >
            완료했어요
          </DoneBtn>
        </BottomBtnContainer>
      </DoneModalContainer>
    </Modal>
  );
};

const DoneModalContainer = styled.div``;

const PlanContent = styled.div`
  width: 100%;
  height: 100px;
  margin: 8px 0;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const PlanText = styled.div`
  width: 100%;
  font-family: 'Pretendard';
  color: ${({ theme }) => theme.colors.green};
  text-align: center;
`;
const GuideText = styled.div`
  width: 100%;
  text-align: center;

  font-family: 'PretendardMedium';
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray_900};
`;

const BottomBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BottomBtn = styled.button`
  width: 132px;
  height: 28px;
  border-radius: 4px;
  border: none;
  padding: 0;

  font-family: 'Pretendard';
  font-size: 11px;
`;

export const CancelBtn = styled(BottomBtn)`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.green};
`;

export const DoneBtn = styled(BottomBtn)`
  background-color: ${({ theme }) => theme.colors.green};
  color: white;
`;
