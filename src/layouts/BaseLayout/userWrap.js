/**
 * Created by xiaobxia on 2017/12/6.
 */
import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {appActions} from 'localStore/actions';
import {Menu, Icon, Dropdown, Avatar, Button, Badge, Popover} from 'antd';
import NoticeList from './list'

//PureComponent浅比较
class UserWrap extends PureComponent {
  logout = () => {
    console.log('in')
    const {appActions} = this.props;
    appActions.appLogout().then(() => {
      window.location.reload();
    });
  };

  renderUserMenu = () => {
    const userName = this.props.app.loginUser.userName;
    const iconStyle = {marginRight: 10};
    return (
      <Menu>
        <Menu.Item><Link to={'/account/' + userName}><Icon type="user" style={iconStyle}/>个人中心</Link></Menu.Item>
        <Menu.Item><Icon type="setting" style={iconStyle}/>设置</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <div onClick={this.logout}>
            <Icon type="logout" style={iconStyle}/>退出登录
          </div>
        </Menu.Item>
      </Menu>
    );
  };

  renderBadge = () => {
    return (
      <Badge dot className="header-bell-icon">
        <Icon type="bell"/>
      </Badge>
    );
  };

  getNotificationBox() {
    const {children, loading, locale} = this.props;
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

  // renderWriteMenu = () => {
  //   return (
  //     <Menu>
  //       <Menu.Item key="1">1st menu item</Menu.Item>
  //       <Menu.Item key="2">2nd menu item</Menu.Item>
  //       <Menu.Item key="3">3rd item</Menu.Item>
  //     </Menu>
  //   );
  // };

  render() {
    return (
      <div className="header-user-wrap">
        <Button type="primary" style={{marginRight: 20}}>
          <Link to="/write">发帖</Link>
        </Button>
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


const mapStateToProps = state => {
  return {
    app: state.app
  }
};
const mapDispatchToProps = dispatch => ({
  //action在此为引入
  appActions: bindActionCreators(appActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserWrap);
