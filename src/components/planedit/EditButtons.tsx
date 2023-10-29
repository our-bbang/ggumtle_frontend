import styled from 'styled-components';
import { contentState } from './PlanEditContent';

interface EditButtonsProps {
  content: contentState;
  setContent: React.Dispatch<React.SetStateAction<contentState>>;
}
export const EditButtons = ({ content, setContent }: EditButtonsProps) => {
  return (
    <EditButtonsContainer
      className={content === contentState.Default ? '' : 'hide'}
    >
      <EditBtn
        onClick={() => {
          setContent(contentState.Edit);
        }}
      >
        목표 수정하기
      </EditBtn>
      <DoneBtn
        onClick={() => {
          setContent(contentState.Done);
        }}
      >
        목표 완료하기
      </DoneBtn>
    </EditButtonsContainer>
  );
};

const EditButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;

  width: 390px;

  &.hide {
    display: none;
  }
`;

const Button = styled.button`
  width: 180px;
  height: 32px;
  border-radius: 8px;

  border: none;
  color: white;
  font-family: 'PretendardMedium';
  font-size: 12px;
`;

const EditBtn = styled(Button)`
  background-color: #9d9bff;
`;

const DoneBtn = styled(Button)`
  background-color: #ff7ebc;
`;
