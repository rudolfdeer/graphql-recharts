import { Dispatch } from 'redux';
import { getUserInfo } from '../api/restapi';
import actions from './actions';

export const getUser =
  (nickname: string) =>
  async (dispatch: Dispatch): Promise<void> => {
    const user = await getUserInfo(nickname);

    dispatch(actions.getUser(user));
  };
