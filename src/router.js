import React from 'react'
import Bundle from './components/bundle'
import Route404 from 'Bundle-loader?lazy!localRoutes/404'
import Login from 'Bundle-loader?lazy!localRoutes/Login'
import Register from 'Bundle-loader?lazy!localRoutes/Register'
import RegisterResult from 'Bundle-loader?lazy!localRoutes/RegisterResult'
import UserActive from 'Bundle-loader?lazy!localRoutes/Active'
import AppHome from 'Bundle-loader?lazy!localRoutes/Home'

//router4就得以这种方式懒加载
//其实model不需要按需加载，因为本来就不应该太大，应该由组件自己维护状态
let getComponent = (component) => {
  return (props) => {
    return (
      <Bundle load={component}>
        {(Container) => {
          return (<Container {...props}/>);
        }}
      </Bundle>
    );
  }
};

export const baseRoutes = [
  {
    name: 'AppHome',
    path: '/',
    component: getComponent(AppHome)
  }
];
export const otherRoutes = [
  {
    name: 'Login',
    path: '/user/login',
    component: getComponent(Login)
  },
  {
    name: 'Register',
    path: '/user/register',
    component: getComponent(Register)
  },
  {
    name: 'RegisterResult',
    path: '/user/registerResult',
    component: getComponent(RegisterResult)
  },
  {
    name: 'UserActive',
    path: '/user/active',
    component: getComponent(UserActive)
  },
  {
    name: '404',
    path: '/404',
    component: getComponent(Route404)
  }
];
export const notMatch = {
  name: '404',
  path: '',
  component: getComponent(Route404)
};
