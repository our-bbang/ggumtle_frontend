import { useRecoilValueLoadable } from 'recoil';
import { mandalartPlan } from '@recoil/plan';

import { Loading } from './Loading';
import { Plan } from './Plan';
import { Error } from './Error';

export const MandalartPage = () => {
  const planLodable = useRecoilValueLoadable(mandalartPlan);

  switch (planLodable.state) {
    case 'hasValue':
      return <Plan content={planLodable.contents} />;
    case 'loading':
      return <Loading />;
    case 'hasError':
      return <Error />;
  }
};
