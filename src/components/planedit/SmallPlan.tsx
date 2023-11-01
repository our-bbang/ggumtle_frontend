import { SmallGoal } from 'src/types/plan';
import styled from 'styled-components';

interface SmallPlanProps {
  content: SmallGoal;
  setDoneModalData: React.Dispatch<
    React.SetStateAction<{
      mini_num: number;
      small_goal: string;
    }>
  >;
  setIsOpenDoneModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const SmallPlan = ({
  content,
  setDoneModalData,
  setIsOpenDoneModal,
}: SmallPlanProps) => {
  const handleClickCheckBtn = (num: number, goal: string) => {
    setDoneModalData({
      mini_num: num,
      small_goal: goal,
    });
    setIsOpenDoneModal(true);
  };

  return (
    <SmallPlanContainer>
      <Header>
        <img
          src={import.meta.env.BASE_URL + './icon/flag_icon.svg'}
          alt="목표"
        />
        {content.small_goal}
      </Header>

      <PlanCheckBox>
        <CheckBtn
          onClick={() => {
            handleClickCheckBtn(1, content.small_goal);
          }}
        >
          {content.cmini1 === 1 ? (
            <img
              src={import.meta.env.BASE_URL + './icon/complete_icon.svg'}
              alt="완료"
            />
          ) : (
            <img
              src={import.meta.env.BASE_URL + './icon/unchecked_icon.svg'}
              alt="완료"
            />
          )}
        </CheckBtn>
        <PlanText className={content.cmini1 === 1 ? 'completed' : ''}>
          {content.mini1}
        </PlanText>
      </PlanCheckBox>
      <PlanCheckBox>
        <CheckBtn
          onClick={() => {
            handleClickCheckBtn(2, content.small_goal);
          }}
        >
          {content.cmini2 === 1 ? (
            <img
              src={import.meta.env.BASE_URL + './icon/complete_icon.svg'}
              alt="완료"
            />
          ) : (
            <img
              src={import.meta.env.BASE_URL + './icon/unchecked_icon.svg'}
              alt="완료"
            />
          )}
        </CheckBtn>
        <PlanText className={content.cmini2 === 1 ? 'completed' : ''}>
          {content.mini2}
        </PlanText>
      </PlanCheckBox>
      <PlanCheckBox>
        <CheckBtn
          onClick={() => {
            handleClickCheckBtn(3, content.small_goal);
          }}
        >
          {content.cmini3 === 1 ? (
            <img
              src={import.meta.env.BASE_URL + './icon/complete_icon.svg'}
              alt="완료"
            />
          ) : (
            <img
              src={import.meta.env.BASE_URL + './icon/unchecked_icon.svg'}
              alt="완료"
            />
          )}
        </CheckBtn>
        <PlanText className={content.cmini3 === 1 ? 'completed' : ''}>
          {content.mini3}
        </PlanText>
      </PlanCheckBox>
      <PlanCheckBox>
        <CheckBtn
          onClick={() => {
            handleClickCheckBtn(4, content.small_goal);
          }}
        >
          {content.cmini4 === 1 ? (
            <img
              src={import.meta.env.BASE_URL + './icon/complete_icon.svg'}
              alt="완료"
            />
          ) : (
            <img
              src={import.meta.env.BASE_URL + './icon/unchecked_icon.svg'}
              alt="완료"
            />
          )}
        </CheckBtn>
        <PlanText className={content.cmini4 === 1 ? 'completed' : ''}>
          {content.mini4}
        </PlanText>
      </PlanCheckBox>
    </SmallPlanContainer>
  );
};

const SmallPlanContainer = styled.div`
  width: 100%;
`;

const Header = styled.div`
  margin: 10px 0;
  img {
    width: 20px;
    margin-right: 6px;
  }
  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.gray_800};

  display: flex;
  align-items: center;
`;

const PlanCheckBox = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;

const CheckBtn = styled.button`
  background-color: transparent;
  padding: 0;
  border: 0;
  display: flex;
  align-items: center;
  margin-left: 2px;
  margin-right: 8px;
`;

const PlanText = styled.div`
  font-family: 'Pretendard';
  color: ${({ theme }) => theme.colors.gray_800};
  font-size: 13px;

  &.completed {
    color: ${({ theme }) => theme.colors.gray_400};
    text-decoration: line-through;
  }
`;
