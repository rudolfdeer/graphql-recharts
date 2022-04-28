import { AnyAction } from 'redux';
import { User } from '../interface';

const initialState = {} as User;

type Reducer = typeof initialState;

export default function reducer(
  state = initialState,
  action: AnyAction,
): Reducer {
  switch (action.type) {
    case 'GET': {
      const user  = action.payload;
      return user;
    }

    default:
      return state;
  }
}