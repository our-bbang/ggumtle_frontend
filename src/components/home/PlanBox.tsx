import styled, { css } from 'styled-components';

interface PlanBoxProps {
  mainplan: string;
  subplans: string[];
  startdate: string;
  percent: number;
  color: number;
}

export const PlanBox = ({ ...props }: PlanBoxProps) => {
  const mainColors = ['#9D9BFF', '#FFC066', '#FF7EBC', '#4ED99C'];
  const darkColors = ['#6D6AFF', '#FF9600', '#FF3898', '#00AD7C'];

  return (
    <PlanBoxContainer color={mainColors[props.color]}>
      <InfoContainer>
        <MainPlanText>{props.mainplan}</MainPlanText>
        <StartDateText color={darkColors[props.color]}>
          {props.startdate}~
        </StartDateText>
        <SubPlans>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={darkColors[props.color]}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 3.5V11.5L8.621 11.495L8.002 10H3.5V14H2V10V2H3.5H9L9.621 3.5H14Z"
            />
          </svg>
          {props.subplans[0]}, {props.subplans[1]}, {props.subplans[2]},{' '}
          {props.subplans[3]}
        </SubPlans>
      </InfoContainer>
      <PercentContainer>{props.percent}</PercentContainer>
    </PlanBoxContainer>
  );
};

const PlanBoxContainer = styled.div<{ color: string }>`
  width: 85%;
  height: 86px;
  border-radius: 15px;
  ${({ color }) => css`
    background-color: ${color};
  `}

  display: flex;
  padding: 0 18px;
  margin: 8px 0;
`;

const InfoContainer = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainPlanText = styled.div`
  font-family: 'PretendardMedium';
  font-size: 16px;
  color: white;

  margin-bottom: 8px;
`;

const StartDateText = styled.div<{ color: string }>`
  font-family: 'PretendardMedium';
  font-size: 12px;
  ${({ color }) => css`
    color: ${color};
  `}
  margin-bottom: 6px;
`;

const SubPlans = styled.div`
  font-family: 'PretendardMedium';
  font-size: 10px;
  color: white;

  display: flex;
  align-items: center;

  svg {
    margin-right: 4px;
  }
`;

const PercentContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: aliceblue;
`;
