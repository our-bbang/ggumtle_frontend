import { useRecoilValueLoadable } from 'recoil';
import { planData } from '@recoil/plan';

import { Loading } from './Loading';
import { Plan } from './Plan';
import { ErrorPage } from '@pages/Error';

export const PlanPage = () => {
  const planLodable = useRecoilValueLoadable(planData);

  switch (planLodable.state) {
    case 'hasValue':
      return <Plan plan={planLodable.contents} />;
    case 'loading':
      return <Loading />;
    case 'hasError':
      return <ErrorPage />;
  }
};
