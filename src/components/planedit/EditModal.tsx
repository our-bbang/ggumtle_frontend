import styled from 'styled-components';
import { Modal } from '@components/common/Modal';

interface EditModalProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const EditModal = ({ isOpenModal, setIsOpenModal }: EditModalProps) => {
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
        <EditTextArea />
        <BottomBtnContainer>
          <CancelBtn>취소</CancelBtn>
          <DoneBtn>편집 완료</DoneBtn>
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
