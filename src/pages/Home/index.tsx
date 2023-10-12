import styled from 'styled-components';

import { HomeHeader } from '@components/home/HomeHeader';
import { PlanBox } from '@components/home/PlanBox';

const data = [
  {
    mainplan: '개발자로 취업하기',
    subplans: ['자기계발', '네트워킹', '프로젝트', '학습'],
    startdate: '2023.05.12',
    percent: 50,
  },
  {
    mainplan: '개발자로 취업하기',
    subplans: ['자기계발', '네트워킹', '프로젝트', '학습'],
    startdate: '2023.05.12',
    percent: 50,
  },
  {
    mainplan: '개발자로 취업하기',
    subplans: ['자기계발', '네트워킹', '프로젝트', '학습'],
    startdate: '2023.05.12',
    percent: 50,
  },
  {
    mainplan: '개발자로 취업하기',
    subplans: ['자기계발', '네트워킹', '프로젝트', '학습'],
    startdate: '2023.05.12',
    percent: 50,
  },
];

export const HomePage = () => {
  return (
    <HomePageContainer>
      <HomeHeader />
      {data.map((el, idx) => {
        return (
          <PlanBox
            key={idx}
            mainplan={el.mainplan}
            subplans={el.subplans}
            startdate={el.startdate}
            percent={el.percent}
            color={idx % 4}
          />
        );
      })}
    </HomePageContainer>
  );
};

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  padding-top: 100px;
`;
