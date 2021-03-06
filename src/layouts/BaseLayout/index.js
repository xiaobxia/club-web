import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import {Icon, Layout, Menu, Breadcrumb, Input, notification} from 'antd';
const {Header, Content, Footer} = Layout;
import {appActions} from 'localStore/actions'
import {baseRoutes, shouldLoginRoutes, notMatch} from '../../router'
import AppHeader from './header';
import AppFooter from './footer';
import './baseLayout.scss'

class BaseLayout extends PureComponent {
  constructor() {
    super();
  }

  state = {
    menuProps: {}
  };

  componentWillMount() {
    //只有在刷新时才check
    if (!this.props.app.loginUser.isLogin) {
      this.props.appActions.appCheckLogin();
    }
  }

  //生命周期mount
  componentDidMount() {
    if (this.props.app.loginUser.active === 'N') {
      notification.open({
        message: 'Notification Title',
        description: '请尽快去验证邮箱',
        icon: <Icon type="smile-circle" style={{color: '#108ee9'}}/>
      });
    }
  }

  //生命周期销毁前
  componentWillUnmount() {
  }

  render() {
    return (
      <div className="app-main">
        <Layout className="layout">
          <Header>
            <AppHeader/>
          </Header>
          <Content>
            <Switch>
              {shouldLoginRoutes.map((item) => {
                return (<Route exact key={item.path} path={item.path} component={item.component}/>);
              })}
              {baseRoutes.map((item) => {
                return (<Route exact key={item.path} path={item.path} component={item.component}/>);
              })}
              <Route path={notMatch.path} component={notMatch.component}/>
            </Switch>
          </Content>
          <Footer>
            <AppFooter/>
          </Footer>
        </Layout>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BaseLayout));
