import { useSetRecoilState } from 'recoil';
import { completedProgress, progressPercent } from '@recoil/progress';

type Progress = 'completedStep' | 'percent';

//progress가 완료된 단계를 나타내는 전역 상태를 업데이트한다.
export const useProgress = () => {
  const setCompletedStep = useSetRecoilState(completedProgress);
  const setCompletedPercent = useSetRecoilState(progressPercent);
  return (type: Progress, value: number) => {
    if (type === 'completedStep') setCompletedStep(value);
    else if (type === 'percent') setCompletedPercent(value);
  };
};
