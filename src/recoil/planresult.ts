import { atom } from 'recoil';
import { persistAtom } from './persist';

export interface BucketListDetail {
  Detail1: string;
  Detail2: string;
  Detail3: string;
  Detail4: string;
}

export interface BucketListItem {
  Value: string;
  Details: BucketListDetail;
}

export interface BucketList {
  [key: string]: BucketListItem;
}

export const planresult = atom({
  key: 'planresult',
  default: {},
  effects_UNSTABLE: [persistAtom],
});
