import { useSetRecoilState } from 'recoil';
import { inputProgressDoneSelector } from '@recoil/progress';

//progress가 완료된 단계를 나타내는 전역 상태를 업데이트한다.
export const useInputProgress = () => {
  const setInputProgressDone = useSetRecoilState(inputProgressDoneSelector);
  return (completedStep: number) => {
    setInputProgressDone(completedStep);
  };
};
