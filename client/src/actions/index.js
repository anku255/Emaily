import axios from 'axios';
import { FETCH_USER } from './types';

// using redux-thunk middleware to dispatch the action
// only after request is complete
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// handleToken will be called by StripeCheckout Payment
// component. The dispatch type FETCH_USER will be picked
// by authReucer and it will update anything related with
// user model, say Header
export const handleToken = token => async dispatch => {
  const res = await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

// submitSurvey will be called from SurveyFormReview component
export const submitSurvey = values => {
  return { type: 'submit_survey' };
};
