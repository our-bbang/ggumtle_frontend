import { atom } from 'recoil';

//progressbar의 진행률(%)
export const progressState = atom<number>({
  key: 'progressState',
  default: 0,
});

export const progressStepState = atom<Array<boolean>>({
  key: 'progressStepState',
  default: [true, false],
});
