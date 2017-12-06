/**
 * Created by xiaobxia on 2017/12/6.
 */
import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom';
import {Menu, Icon, Dropdown, Avatar, Button, Badge} from 'antd';
//PureComponent浅比较
class UserWrap extends PureComponent {
  renderUserMenu = () => {
    return (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
      </Menu>
    );
  };

  render() {
    return (
      <div className="header-user-wrap">
        <Link className="link-like" to="/message">
          <Badge dot>
            <Icon type="bell"/>
          </Badge>
        </Link>
        <Dropdown overlay={this.renderUserMenu()} placement="bottomCenter">
          <Avatar shape="circle" icon="user"/>
        </Dropdown>
      </div>
    );
  }
}

export default UserWrap;
