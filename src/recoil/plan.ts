import { selector, atom } from 'recoil';
import { getMandalartPlan } from '@api/openai';
import { goalState, userInfoState } from './goal';
import { allUserInfo } from './userinput';
import { getPlan } from '@api/planAPIS';
import { PlanEdit } from 'src/types/plan';

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

export const planData = selector({
  key: 'planData',
  get: async ({ get }) => {
    const goal = get(goalState);
    const userInfo = get(userInfoState);
    const response = await getPlan(goal, userInfo.email);
    if (response.error) throw response.error;
    return response;
  },
});

export const planEditState = atom<PlanEdit>({
  key: 'planEditState',
  default: {
    small_goal: '',
    mini_num: 0,
    value: '',
  },
});
