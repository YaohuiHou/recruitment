import {
  LOGIN_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  USER_AUTH,
  GET_WXINFO_SUCCESS
} from '../types/login'
import {
  createAction
} from 'redux-actions'
import request from '../../common/request'

const loginRequest = () => {
  request.cehomeRequest().then(res => {

  }).catch(err => {

  })
}

export const login = (params) => {
  if (params) {
    return {
      type: LOGIN_SUCCESS,
      payload: {
        userInfo: params
      }
    }
  } else {
    return {
      type: LOGIN_FAIL,
      payload: null
    }
  }

}

// export const login = (params) => ({
//   type: LOGIN_SUCCESS,
//   payload: {
//     userInfo: params
//   }
// });

export const auth = () => ({
  type: USER_AUTH
})

export const getWxInfo = (wxInfo) => ({
  type: GET_WXINFO_SUCCESS,
  payload: {
    wxInfo: wxInfo
  }
})
