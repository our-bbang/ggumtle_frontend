import client from '.';

interface UserInfo {
  gender: number;
  age: number | string;
  job: string;
}
export const getMadalartPlan = async (goal: string, userinfo: UserInfo) => {
  const { data } = await client.get('/api/madalart', {
    data: {
      goal,
      userinfo,
    },
  });
  return data;
};
