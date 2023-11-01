import { atom } from 'recoil';
import { persistAtom } from './persist';

export const planresult = atom({
  key: 'planresult',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
