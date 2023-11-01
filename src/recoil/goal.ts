import { atom } from 'recoil';
import { persistAtom } from './persist';

export const goalState = atom<string>({
  key: 'goalState',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

interface UserInfo {
  email: string;
  name: string;
}
export const userInfoState = atom<UserInfo>({
  key: 'userInfoState',
  default: {
    email: '',
    name: '',
  },
  effects_UNSTABLE: [persistAtom],
});
