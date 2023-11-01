import styled from 'styled-components';
import { SmallPlan } from './SmallPlan';
import { useRecoilValue } from 'recoil';
import { goalState } from '@recoil/goal';
import { planresult } from '@recoil/planresult';
import { contentState } from './PlanEditLayout';

interface CompletePlanProps {
  setContent: React.Dispatch<React.SetStateAction<contentState>>;
  setDoneModalData: React.Dispatch<
    React.SetStateAction<{
      mini_num: number;
      small_goal: string;
    }>
  >;
  setIsOpenDoneModal: React.Dispatch<React.SetStateAction<boolean>>;
}
export const CompletePlan = ({
  setContent,
  setDoneModalData,
  setIsOpenDoneModal,
}: CompletePlanProps) => {
  const goal = useRecoilValue(goalState);
  const plan = useRecoilValue(planresult);

  const handleClickDoneBtn = () => {
    setContent(contentState.Default);
  };

  return (
    <CompletePlanContainer>
      <Header>
        <MainGoal>{goal}</MainGoal>
        <DoneEditBtn onClick={handleClickDoneBtn}>편집 완료</DoneEditBtn>
      </Header>
      <PlanInfo>
        <Date>
          <img
            src={import.meta.env.BASE_URL + './icon/calendar_icon.svg'}
            alt="시작일"
          />
          {plan?.result[0].date.slice(0, 10)} ~
        </Date>
        <Percent>
          달성률: <span>{plan.score}%</span>
        </Percent>
      </PlanInfo>
      <SmallPlan
        content={plan.result[0]}
        setDoneModalData={setDoneModalData}
        setIsOpenDoneModal={setIsOpenDoneModal}
      />
      <SmallPlan
        content={plan.result[1]}
        setDoneModalData={setDoneModalData}
        setIsOpenDoneModal={setIsOpenDoneModal}
      />
      <SmallPlan
        content={plan.result[2]}
        setDoneModalData={setDoneModalData}
        setIsOpenDoneModal={setIsOpenDoneModal}
      />
      <SmallPlan
        content={plan.result[3]}
        setDoneModalData={setDoneModalData}
        setIsOpenDoneModal={setIsOpenDoneModal}
      />
    </CompletePlanContainer>
  );
};

const CompletePlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 390px;
  padding: 0 10px 30px;
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
`;

const MainGoal = styled.div`
  flex: 1;
  font-family: 'PretendardMedium';
  color: ${({ theme }) => theme.colors.green};
`;

const DoneEditBtn = styled.button`
  width: 80px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 4px;
  font-family: 'PretendardMedium';
  color: white;
`;

const PlanInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_600};
`;

const Date = styled.div`
  font-family: 'PretendardMedium';
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray_800};
  display: flex;
  align-items: center;
  img {
    margin-right: 4px;
  }
  margin-right: 8px;
`;

const Percent = styled.div`
  font-family: 'PretendardMedium';
  font-size: 13px;
  color: ${({ theme }) => theme.colors.gray_800};
  display: flex;
  align-items: center;
  span {
    color: ${({ theme }) => theme.colors.green};
    padding-left: 4px;
  }
`;
