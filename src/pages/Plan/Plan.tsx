import { useEffect } from 'react';

import { useSetRecoilState } from 'recoil';
import { planresult } from '@recoil/planresult';
import { PlanContent } from './PlanContent';

import { PlanType } from 'src/types/plan';

interface PlanProps {
  plan: PlanType;
}
export const Plan = ({ plan }: PlanProps) => {
  const setPlanresult = useSetRecoilState(planresult);

  useEffect(() => {
    setPlanresult(plan);
  }, []);

  return <PlanContent />;
};
