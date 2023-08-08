import { selector } from 'recoil';
import { getMandalartPlan } from '@api/openai';
import { goalState } from './goal';
import { allUserInfo } from './userinput';

export const mandalartPlan = selector({
  key: 'mandalartPlan',
  get: async ({ get }) => {
    const goal = get(goalState);
    const userinputs = get(allUserInfo);

    return getMandalartPlan(goal, userinputs);
  },
});
