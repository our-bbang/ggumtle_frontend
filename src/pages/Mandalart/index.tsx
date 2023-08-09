import { Suspense } from 'react';

import { Loading } from './Loading';
import { Plan } from './Plan';

export const MandalartPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Plan />
    </Suspense>
  );
};
