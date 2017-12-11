/**
 * Created by xiaobxia on 2017/10/20.
 */
import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import {Link, withRouter} from 'react-router-dom';
import {Menu, Input} from 'antd';
import {appActions} from 'localStore/actions'
import UserWrap from './userWrap';

const Search = Input.Search;

class AppHeader extends PureComponent {
  renderMenuList = () => {
    console.log(this.props.location);
    const itemList = [
      {path: '/', name: '首页'},
      {path: '/events', name: '活动'},
      {path: '/friend', name: '交友'},
      {path: '/game', name: '游戏'},
      {path: '/recruitment', name: '兼职'},
      {path: '/business', name: '广告投放'}
    ];
    return (
      <Menu
        className="app-menu"
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[this.props.location.pathname]}
      >
        {itemList.map((item) => {
          return (
            <Menu.Item key={item.path}>
              <Link className="link-like" to={item.path}>{item.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    );
  };

  render() {
    const isLogin = this.props.app.loginUser.isLogin;
    return (
      <div className="app-header">
        <Link to="/">
          <div className="logo">logo</div>
        </Link>
        {this.renderMenuList()}
        {isLogin ? (<UserWrap/>) : (
          <div className="header-user-wrap">
            <Link to="/user/login">登录</Link>
            <span className="decollator">|</span>
            <Link to="/user/register">注册</Link>
          </div>
        )}
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

const mapStateToProps = state => {
  return {
    app: state.app
  }
};
const mapDispatchToProps = dispatch => ({
  //action在此为引入
  appActions: bindActionCreators(appActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppHeader));
