import { useRecoilValue } from 'recoil';

import { mandalartPlan } from '@recoil/plan';

export const Plan = () => {
  const response = useRecoilValue(mandalartPlan);

  return <div>{response.plan}</div>;
};
