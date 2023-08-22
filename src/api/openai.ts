import client from '.';

interface UserInfo {
  gender: number;
  age: number | string;
  job: string;
}
export const getMandalartPlan = async (goal: string, userinfo: UserInfo) => {
  const { data } = await client.get(
    `/ask/report?gender=${userinfo.gender === 1 ? '남' : '여'}&age=${
      userinfo.age
    }&job=${userinfo.job}&bucket=${goal}`,
  );
  return data;
};
