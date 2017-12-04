/**
 * Created by xiaobxia on 2017/10/20.
 */
import React, {PureComponent} from 'react'
import {Menu, Icon, Dropdown, Avatar, Input} from 'antd';
const Search = Input.Search;

class AppHeader extends PureComponent {
  render() {
    return (
      <div className="app-header">
        <div className="logo"/>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        <Search
          className="app-search"
          placeholder="input search text"
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default AppHeader;
