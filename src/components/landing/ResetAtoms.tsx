import { useResetRecoilState } from 'recoil';
import { goalState } from '@recoil/goal';
import { genderState, ageState, jobState } from '@recoil/userinput';
import { useEffect } from 'react';

export const ResetAtoms = () => {
  const resetGoal = useResetRecoilState(goalState);
  const resetGender = useResetRecoilState(genderState);
  const resetAge = useResetRecoilState(ageState);
  const resetJob = useResetRecoilState(jobState);

  useEffect(() => {
    resetGoal();
    resetGender();
    resetAge();
    resetJob();
  }, []);

  return <></>;
};
