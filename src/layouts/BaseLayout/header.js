/**
 * Created by xiaobxia on 2017/10/20.
 */
import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom';
import {Menu, Icon, Dropdown, Avatar, Input} from 'antd';
const Search = Input.Search;

class AppHeader extends PureComponent {
  render() {
    return (
      <div className="app-header">
        <Link to="/"><div className="logo">logo</div></Link>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <div className="header-user-wrap">
          <Link to="/user/login">登录</Link>
          <span className="decollator">|</span>
          <Link to="/user/register">注册</Link>
        </div>
        <div className="header-search-wrap">
          <Search
            placeholder="搜索关键字"
            onSearch={value => console.log(value)}
          />
        </div>
      </div>
    );
  }
}

export default AppHeader;
