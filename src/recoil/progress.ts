import { atom } from 'recoil';

//progress 중 완료된 단계
export const completedProgress = atom<number>({
  key: 'completedProgress',
  default: 1,
});

//progress의 진행률(%)
export const progressPercent = atom<number>({
  key: 'progressPercent',
  default: 0,
});
