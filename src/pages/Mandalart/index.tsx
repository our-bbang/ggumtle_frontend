import { ageState, genderState } from '@recoil/userinput';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const MandalartPage = () => {
  const gender = useRecoilValue(genderState);
  const age = useRecoilValue(ageState);

  useEffect(() => {
    console.log(gender, age);
  }, []);

  return (
    <>
      <div>계획표</div>
    </>
  );
};
