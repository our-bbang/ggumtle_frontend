import { useParams, useLocation } from 'react-router-dom';

import { PlanContent } from './PlanContent';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { getDetailPlan } from '@api/planAPIS';
import { goalState, userInfoState } from '@recoil/goal';
import { planresult } from '@recoil/planresult';

export const PlanPage = () => {
  const { planId } = useParams();
  const location = useLocation();
  const { mainGoal } = location.state;

  const userInfo = useRecoilValue(userInfoState);
  const setPlanResult = useSetRecoilState(planresult);
  const setGoalState = useSetRecoilState(goalState);

  useEffect(() => {
    const planresult = getDetailPlan(userInfo.email, planId || '');
    planresult.then((res) => {
      setPlanResult(res);
    });
    setGoalState(mainGoal);
  }, []);

  return <PlanContent />;
};
