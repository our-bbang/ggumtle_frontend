import styled from 'styled-components';
import { contentState } from './PlanEditLayout';

interface EditButtonsProps {
  content: contentState;
  setContent: React.Dispatch<React.SetStateAction<contentState>>;
}
export const EditButtons = ({ content, setContent }: EditButtonsProps) => {
  return (
    <>
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
      {content === contentState.Edit ? (
        <EditInfoText>
          <img
            src={import.meta.env.BASE_URL + './icon/information_icon.svg'}
            alt="안내"
          />
          <div>계획표를 눌러 내용을 수정하세요.</div>
          <EditEndBtn
            onClick={() => {
              setContent(contentState.Default);
            }}
          >
            수정 완료
          </EditEndBtn>
        </EditInfoText>
      ) : null}
    </>
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

const EditInfoText = styled.div`
  width: 390px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 24px;
    margin-right: 6px;
  }

  div {
    flex: 1;
    font-family: 'PretendardMedium';
    font-size: 14px;
    color: #525463;
  }
`;

const EditEndBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 4px;
  font-family: 'PretendardMedium';
  color: white;
`;
