import { REST_API_BASE } from '../constants/api';

export const getUserInfo = async (nickname: string) => {
  const response = await fetch(`${REST_API_BASE}${nickname}`);
  const result = await response.json();
  return result;
};

