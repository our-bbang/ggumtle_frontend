import { atom, selector } from 'recoil';

export enum Gender {
  Male = 1,
  Female = 2,
}
export const genderState = atom<Gender.Male | Gender.Female | 0>({
  key: 'genderState',
  default: 0,
});

export const ageState = atom<number | string>({
  key: 'ageState',
  default: 20,
});

export const jobState = atom<string>({
  key: 'jobState',
  default: '',
});

export const isUserInfoCompletedSelector = selector({
  key: 'isUserInfoCompletedSelector',
  get: ({ get }) => {
    const gender = get(genderState);
    const age = get(ageState);
    const job = get(jobState);

    return gender !== 0 && job !== '' && age !== '';
  },
});

export const allUserInfo = selector({
  key: 'allUserInfo',
  get: ({ get }) => {
    const gender = get(genderState);
    const age = get(ageState);
    const job = get(jobState);
    return { gender, age, job };
  },
});
