/**
 * Created by xiaobxia on 2017/12/6.
 */
import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom';
import {Menu, Icon, Dropdown, Avatar, Button, Badge, Popover} from 'antd';
import NoticeList from './list'

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

  renderBadge = () => {
    return (
      <Badge dot>
        <Icon type="bell"/>
      </Badge>
    );
  };

  getNotificationBox() {
    const { children, loading, locale } = this.props;
    if (!children) {
      return null;
    }
    const panes = children.map((child) => {
      const title = child.props.list && child.props.list.length > 0
        ? `${child.props.title} (${child.props.list.length})` : child.props.title;
      return (
        <TabPane tab={title} key={child.props.title}>
          <NoticeList
            {...child.props}
            data={child.props.list}
            onClick={item => this.onItemClick(item, child.props)}
            onClear={() => this.props.onClear(child.props.title)}
            title={child.props.title}
            locale={locale}
          />
        </TabPane>
      );
    });
    return (
      <Spin spinning={loading} delay={0}>
        <Tabs onChange={this.onTabChange}>
          {panes}
        </Tabs>
      </Spin>
    );
  }

  render() {
    return (
      <div className="header-user-wrap">
        <Popover
          content={this.getNotificationBox()}
          placement="bottomRight"
          trigger="click"
          arrowPointAtCenter
        >
          {this.renderBadge()}
        </Popover>
        <Dropdown overlay={this.renderUserMenu()} placement="bottomCenter">
          <Avatar shape="circle" icon="user"/>
        </Dropdown>
      </div>
    );
  }
}

export default UserWrap;
