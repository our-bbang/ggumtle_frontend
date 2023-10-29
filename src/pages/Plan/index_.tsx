import { useRecoilValueLoadable } from 'recoil';
import { mandalartPlan } from '@recoil/plan';

import { Loading } from './Loading';
import { Plan } from './Plan';
import { ErrorPage } from '@pages/Error';

export const PlanPage = () => {
  const planLodable = useRecoilValueLoadable(mandalartPlan);

  switch (planLodable.state) {
    case 'hasValue':
      return <Plan BucketList={planLodable.contents} />;
    case 'loading':
      return <Loading />;
    case 'hasError':
      return <ErrorPage />;
  }
};
