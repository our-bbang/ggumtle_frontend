import { useSetRecoilState } from 'recoil';
import { progressState } from '@recoil/progress';

//progress 진행률(%) 전역 상태 업데이트
export const useProgress = () => {
  const setProgress = useSetRecoilState(progressState);

  return (progress: number) => {
    setProgress(progress);
  };
};
