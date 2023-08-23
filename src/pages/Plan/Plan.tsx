import { useSetRecoilState } from 'recoil';
import { planresult, BucketList } from '@recoil/planresult';

import { PlanLayout } from '@components/plan/PlanLayout';
import { useEffect } from 'react';

interface BucketListData {
  BucketList: BucketList;
}

export const Plan = ({ BucketList }: BucketListData) => {
  const setPlanresult = useSetRecoilState(planresult);

  useEffect(() => {
    setPlanresult(BucketList);
  }, []);
  return <PlanLayout />;
};
