import client from '.';

export const getPlan = async (goal: string, user_email: string) => {
  const { data } = await client.get(
    `/ask/gpt?bucket=${goal}&user_email=${user_email}`,
  );
  return data;
};
