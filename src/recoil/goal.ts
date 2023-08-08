import { atom } from 'recoil';

export const goalState = atom<string>({
  key: 'goalState',
  default: '',
});
