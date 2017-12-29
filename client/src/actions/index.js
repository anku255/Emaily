import axios from 'axios';
import { FETCH_USER } from './types';

// using redux-thunk middleware to dispatch the action
// only after request is complete
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};
