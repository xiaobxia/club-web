import React from 'react'
import Bundle from './components/bundle'
import Route404 from 'Bundle-loader?lazy!localRoutes/404'
import Login from 'Bundle-loader?lazy!localRoutes/User/Login'
import Register from 'Bundle-loader?lazy!localRoutes/User/Register'
import RegisterResult from 'Bundle-loader?lazy!localRoutes/User/RegisterResult'
import UserActive from 'Bundle-loader?lazy!localRoutes/User/Active'
import AppHome from 'Bundle-loader?lazy!localRoutes/Home'
import Account from 'Bundle-loader?lazy!localRoutes/Account'
import Write from 'Bundle-loader?lazy!localRoutes/Write'

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

export const shouldLoginRoutes = [
  {
    name: 'Write',
    path: '/write',
    component: getComponent(Write)
  }
];

export const baseRoutes = [
  {
    name: 'AppHome',
    path: '/',
    component: getComponent(AppHome)
  },
  {
    name: 'Account',
    path: '/account/:name/:type?',
    component: getComponent(Account)
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
