import { ErrorPage } from '@pages/Error';
import { Loading } from '@pages/Plan/Loading';
import { planData } from '@recoil/plan';
import { useRecoilValueLoadable } from 'recoil';

import { useNavigate } from 'react-router-dom';

export const CreatePlanPage = () => {
  const navigate = useNavigate();
  const planLodable = useRecoilValueLoadable(planData);

  switch (planLodable.state) {
    case 'hasValue':
      navigate('/home');
      return <Loading />;
    case 'loading':
      return <Loading />;
    case 'hasError':
      return <ErrorPage />;
  }
};
