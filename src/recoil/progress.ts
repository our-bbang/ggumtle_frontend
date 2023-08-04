import { DefaultValue, atom, selector } from 'recoil';

import { INPUT_PROGRESS } from '@constants/index';

//progressbar의 진행률(%)
export const progressState = atom<number>({
  key: 'progressState',
  default: 0,
});

export const progressStepState = atom<Array<boolean>>({
  key: 'progressStepState',
  default: [true, false],
});

export interface IProgress {
  total: number; //전체 progress 단개의 개수
  done: number | DefaultValue; //완료된 progress 단계의 개수
}

/*
  목표와 유저 정보를 입력 받는 2단계 progress의 상태
 */
export const inputProgressState = atom<IProgress>({
  key: 'inputProgressState',
  default: {
    total: INPUT_PROGRESS,
    done: 0,
  },
});

export const inputProgressDoneSelector = selector<number | DefaultValue>({
  key: 'inputProgressDoneSelector',
  get: ({ get }) => {
    const progressState = get(inputProgressState);
    return progressState.done;
  },
  set: ({ set }, newVal: number | DefaultValue) => {
    set(inputProgressState, {
      total: INPUT_PROGRESS,
      done: newVal,
    });
  },
});

export const inputProgressPercent = selector<number>({
  key: 'inputProgressPercent',
  get: ({ get }) => {
    const progressState = get(inputProgressState);
    const percent =
      ((progressState.done as number) / progressState.total) * 100;
    return Math.floor(percent);
  },
});
