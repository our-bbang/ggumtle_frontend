import { atom } from 'recoil';
import { persistAtom } from './persist';

export const goalState = atom<string>({
  key: 'goalState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
