import { User } from '../interface';

class Actions {
  getUser(user: User) {
    return {
      type: 'GET',
      payload: user,
    };
  }
}

export default new Actions();