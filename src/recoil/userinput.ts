import { atom } from 'recoil';

export enum Gender {
  Male = 1,
  Female = 2,
}
export const genderState = atom<Gender.Male | Gender.Female | 0>({
  key: 'genderState',
  default: 0,
});
