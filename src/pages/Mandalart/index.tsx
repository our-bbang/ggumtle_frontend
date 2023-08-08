import { Suspense } from 'react';
import { useRecoilValue } from 'recoil';

import { mandalartPlan } from '@recoil/plan';

export const MandalartPage = () => {
  const plan = useRecoilValue(mandalartPlan);

  return (
    <Suspense fallback={<div>loading...</div>}>
      <div>계획표</div>
    </Suspense>
  );
};
