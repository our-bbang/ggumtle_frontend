import styled from 'styled-components';
import { Modal } from '@components/common/Modal';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { planEditState } from '@recoil/plan';

import { editPlan, getDetailPlan } from '@api/planAPIS';
import { userInfoState } from '@recoil/goal';
import { useParams } from 'react-router-dom';
import { planresult } from '@recoil/planresult';

interface EditModalProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const EditModal = ({ isOpenModal, setIsOpenModal }: EditModalProps) => {
  const userInfo = useRecoilValue(userInfoState);
  const setPlanResult = useSetRecoilState(planresult);
  const [planEdit, setPlanEdit] = useRecoilState(planEditState);
  const [text, setText] = useState<string>('');

  const params = useParams();
  const { planId } = params;

  useEffect(() => {
    setText(planEdit.value);
  }, [planEdit.value]);

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    setPlanEdit({
      ...planEdit,
      value: e.target.value,
    });
  };

  const handleClickEditBtn = () => {
    const response = editPlan(
      userInfo.email,
      planEdit.small_goal,
      planId || '',
      planEdit.mini_num,
      planEdit.value,
    );
    response
      .then(() => {
        const planresult = getDetailPlan(userInfo.email, planId || '');
        planresult.then((res) => {
          setPlanResult(res);
        });
        setIsOpenModal(false);
        setText('');
      })
      .catch(() => {
        setIsOpenModal(false);
        setText('');
      });
  };

  return (
    <Modal
      width="280px"
      height="200px"
      padding="20px 24px"
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
    >
      <EditModalContainer>
        <ModalHeader>
          <HeaderContent>목표 수정</HeaderContent>
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
        <EditTextArea
          value={text}
          onChange={(e) => {
            handleChangeText(e);
          }}
        />
        <BottomBtnContainer>
          <CancelBtn
            onClick={() => {
              setIsOpenModal(false);
            }}
          >
            취소
          </CancelBtn>
          <DoneBtn onClick={handleClickEditBtn}>편집 완료</DoneBtn>
        </BottomBtnContainer>
      </EditModalContainer>
    </Modal>
  );
};

const EditModalContainer = styled.div`
  border-radius: 4px;
  background-color: white;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContent = styled.div`
  font-family: 'PretendardMedium';
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray_900};
`;

export const CloseBtn = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;

  img {
    width: 16px;
    height: 16px;
  }
`;

const EditTextArea = styled.textarea`
  width: 230px;
  height: 100px;
  padding: 12px;
  margin-top: 6px;

  border: none;
  background-color: ${({ theme }) => theme.colors.gray_200};
  border-radius: 2px;
  outline: none;

  font-family: 'Pretendard';
`;

const BottomBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 6px;
`;

const BottomBtn = styled.button`
  width: 112px;
  height: 24px;
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
