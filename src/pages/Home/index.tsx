import styled from 'styled-components';

import { HomeHeader } from '@components/home/HomeHeader';
import { PlanBox } from '@components/home/PlanBox';
import { AddPlanBtn } from '@components/home/AddPlanBtn';

const data = [
  {
    mainplan: '1년 안에 백엔드 개발자로 취업하기',
    subplans: ['자기계발', '네트워킹', '프로젝트', '학습'],
    startdate: '2023.05.12',
    percent: 64,
  },
  {
    mainplan: '20년 안에 내집 마련하기',
    subplans: ['부동산 투자', '주택청약', '재테크', '경제 공부'],
    startdate: '2023.01.01',
    percent: 10,
  },
  {
    mainplan: '하프 마라톤 완주하기',
    subplans: ['기록관리', '러닝크루', '근력운동', '체중관리'],
    startdate: '2023.08.30',
    percent: 36,
  },
  {
    mainplan: '대학교 졸업',
    subplans: ['학점 관리', '졸업 프로젝트', '졸업 논문', '졸업 시험'],
    startdate: '2023.05.12',
    percent: 82,
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
            planId={idx}
            mainplan={el.mainplan}
            subplans={el.subplans}
            startdate={el.startdate}
            percent={el.percent}
            color={idx % 4}
            index={idx}
          />
        );
      })}
      <AddPlanBtn />
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
