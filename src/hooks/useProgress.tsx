import { useSetRecoilState } from 'recoil';
import { progressState } from '@recoil/progress';

export const useProgress = () => {
  const setProgress = useSetRecoilState(progressState);

  return (progress: number) => {
    setProgress(progress);
  };
};
