/**
 * Created by xiaobxia on 2017/10/18.
 */
import React, {PureComponent} from 'react'
import {Card, Alert} from 'antd';
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'
import {bindActionCreators} from 'redux';
import LoginForm from './form'
import {appActions} from 'localStore/actions'
import './login.scss'

class Login extends PureComponent {
  state = {
    showError: false,
    errorMsg: ''
  };

  onClose = () => {
    this.setState({
      showError: false,
      errorMsg: ''
    });
  };

  loginHandler = (formData) => {
    const {appActions} = this.props;
    appActions.appLogin(formData).then((data) => {
      if (data.login === false && data.msg) {
        this.setState({
          showError: true,
          errorMsg: data.msg
        });
      } else {
        this.props.history.push('/');
      }
    });
  };

  render() {
    return (
      <div className="login-wrap">
        <div className="logo">登录</div>
        {this.state.showError && (<Alert message={this.state.errorMsg} type="error" closable onClose={this.onClose}/>)}
        <Card hoverable={false}>
          <LoginForm onLoginHandler={this.loginHandler}>
            <Link to="/user/forgot">忘记密码</Link>
          </LoginForm>
          <Link to="/user/register">没有账号？去免费注册</Link>
        </Card>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
