import styled from 'styled-components';

import { HomeHeader } from '@components/home/HomeHeader';
import { PlanBox } from '@components/home/PlanBox';
import { AddPlanBtn } from '@components/home/AddPlanBtn';
import { useEffect, useState } from 'react';

import { useRecoilState } from 'recoil';
import { userInfoState } from '@recoil/goal';

import { getPlanList } from '@api/planAPIS';
import { PlanList } from 'src/types/plan';

export const HomePage = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const user_email = params.get('user_email') || '';
    const user_name = params.get('user_name') || '';
    if (user_email !== '') {
      setUserInfo({
        email: user_email,
        name: user_name,
      });
    }
  }, []);

  const [planList, setPlanList] = useState<PlanList[]>([]);

  useEffect(() => {
    const planListResponse = getPlanList(userInfo.email);
    planListResponse.then((res) => {
      setPlanList(res);
    });
  }, []);

  return (
    <HomePageContainer>
      <HomeHeader />
      {planList.map((el, idx) => {
        return (
          <PlanBox
            key={idx}
            planId={el.main_id}
            mainplan={el.main}
            subplans={[el.small1, el.small2, el.small3, el.small4]}
            startdate={el.datetime}
            percent={el.total}
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
