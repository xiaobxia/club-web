/**
 * Created by xiaobxia on 2017/10/19.
 */
import md5 from 'md5';
import http from 'localUtil/httpUtil';
const APP_LOGIN = 'APP_LOGIN';
const APP_LOGIN_SUC = 'APP_LOGIN_SUC';
const APP_CHECK_LOGIN = 'APP_CHECK_LOGIN';
const APP_CHECK_LOGIN_SUC = 'APP_CHECK_LOGIN_SUC';
const APP_LOGOUT_SUC = 'APP_LOGOUT_SUC';

export const appActions = {
  appCheckLogin() {
    return (dispatch, getState) => {
      dispatch({type: APP_CHECK_LOGIN});
      return http.get('sys/auth/checkLogin').then((data) => {
        if (data.status === 0) {
          dispatch({type: APP_CHECK_LOGIN_SUC, loginUser: data.data});
        }
        return data;
      });
    };
  },
  appLogin({user, password, ifKeep}) {
    return (dispatch, getState) => {
      dispatch({type: APP_LOGIN});
      return http.post('sys/auth/login', {account: user, password: md5(password), ifKeep: ifKeep}).then((data) => {
        if (data.status === 0) {
          dispatch({type: APP_LOGIN_SUC, loginUser: data.data});
        }
        return data;
      });
    };
  },
  appLogout() {
    return (dispatch, getState) => {
      return http.get('sys/auth/logout').then((data) => {
        dispatch({type: APP_LOGOUT_SUC});
        return data;
      });
    };
  }
};

const appStore = {
  loginUser: {},
  isGlobLoading: false
};
export const appReducers = (state = appStore, action) => {
  let data = Object.assign({}, state);
  switch (action.type) {
    case APP_CHECK_LOGIN: {
      data.loginUser = {};
      data.isGlobLoading = true;
      return data;
    }
    case APP_CHECK_LOGIN_SUC: {
      data.isGlobLoading = false;
      if (action.loginUser.isLogin === true) {
        data.loginUser = action.loginUser;
        localStorage.setItem('userCode', action.loginUser.userCode);
      } else {
        data.loginUser = {
          isLogin: false
        }
      }
      return data;
    }
    case APP_LOGIN: {
      data.loginUser = {};
      return data;
    }
    case APP_LOGIN_SUC: {
      data.loginUser = action.loginUser;
      //登录页登录的初始化，内部登录不需要
      data.collapsed = false;
      localStorage.removeItem('collapsed');
      localStorage.setItem('userCode', action.loginUser.userCode);
      return data;
    }
    case APP_LOGOUT_SUC: {
      data.loginUser = {
        isLogin: false
      };
      return data;
    }
    //TODO 需要有default返回返回旧的state
    default: {
      return state
    }
  }
};
