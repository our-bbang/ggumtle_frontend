import client from '.';

interface UserInfo {
  gender: number;
  age: number | string;
  job: string;
}
export const getMandalartPlan = async (goal: string, userinfo: UserInfo) => {
  const { data } = await client.get('/plan', {
    data: {
      goal,
      userinfo,
    },
  });
  return data;
};
