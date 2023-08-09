import { selector } from 'recoil';
import { getMandalartPlan } from '@api/openai';
import { goalState } from './goal';
import { allUserInfo } from './userinput';

export const mandalartPlan = selector({
  key: 'mandalartPlan',
  get: async ({ get }) => {
    const goal = get(goalState);
    const userinfo = get(allUserInfo);
    const response = await getMandalartPlan(goal, userinfo);
    if (response.error) throw response.error;
    return response;
  },
});
