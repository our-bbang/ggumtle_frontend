import { useResetRecoilState } from 'recoil';
import { goalState } from '@recoil/goal';
import { useEffect } from 'react';

export const ResetAtoms = () => {
  const resetGoal = useResetRecoilState(goalState);

  useEffect(() => {
    resetGoal();
  }, []);

  return <></>;
};
