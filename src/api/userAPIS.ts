//회원 관련 API
import client from '.';
import type { UserType } from '../types/user';

export const postRegisterAPI = async ({ ...props }: UserType) => {
  try {
    const response = await client.post('register', { ...props });
    console.log(response);
    return response.data;
  } catch (error) {
    return null;
  }
};
