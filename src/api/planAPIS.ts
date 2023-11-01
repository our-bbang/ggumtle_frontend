import client from '.';

export const getPlan = async (goal: string, user_email: string) => {
  const { data } = await client.get(
    `/ask/gpt?bucket=${goal}&user_email=${user_email}`,
  );
  return data;
};

export const getPlanList = async (user_email: string) => {
  try {
    const response = await client.get(
      `/ask/get/report/list?user_email=${user_email}`,
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getDetailPlan = async (user_email: string, main_id: string) => {
  try {
    const response = await client.get(
      `/ask/get/report/write?user_email=${user_email}&main_id=${main_id}`,
    );
    return response.data;
  } catch (error) {
    return {};
  }
};

export const patchPlan = async (
  user_email: string,
  small_goal: string,
  main_id: string,
  mini_num: number,
  value: number,
) => {
  try {
    const response = await client.patch('/ask/patch/report/change', {
      user_email,
      small_goal,
      main_id,
      mini_num,
      value,
    });
    return response;
  } catch (error) {
    return null;
  }
};

export const editPlan = async (
  user_email: string,
  small_goal: string,
  main_id: string,
  mini_num: number,
  value: string,
) => {
  try {
    const response = await client.patch('/ask/patch/goal/change', {
      user_email,
      small_goal,
      main_id,
      mini_num,
      value,
    });
    return response;
  } catch (error) {
    return null;
  }
};
