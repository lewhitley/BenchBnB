import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT } from '../actions/session_actions.js';

const _nullUser = {currentUser: null, errors: []};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user, errors: []};
    case RECEIVE_ERRORS:
      return {currentUser: null, errors: action.errors};
    case LOGOUT:
      return _nullUser;
    default:
      return state;
  }
};

export default SessionReducer;
