import {
  handleActions
} from 'redux-actions'
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGIN_START,
  USER_AUTH,
  GET_WXINFO_SUCCESS
} from '../types/index'


const defaultState = {
  login: false,
  status: '', // one of 'info', 'confirm', 'warning'
  userInfoAuth: false,
  userInfo: '',
  wxInfo: ''
};

export default (previousState = defaultState, {
  type,
  payload
}) => {
  switch (type) {
    case LOGIN_START:
      return {
        login: false,
        status: 'start',
        userInfoAuth: false
      };
    case LOGIN_SUCCESS:
      return { ...previousState,
        login: true,
        status: 'success',
        userInfo: payload.userInfo,
        userInfoAuth: false
      };
    case USER_AUTH:
      return {
        ...previousState,
        userInfoAuth: true
      }
    case GET_WXINFO_SUCCESS:
      return {
        ...previousState,
        wxInfo: payload.wxInfo
      }
    case LOGIN_FAIL:
      return { ...previousState,
        login: false,
        status: '',
        userInfoAuth: false
      };
    default:
      return previousState;
  }
};
