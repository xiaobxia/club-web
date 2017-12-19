/**
 * Created by xiaobxia on 2017/11/13.
 */
import React, {PureComponent} from 'react'
import {Icon, Button, Form, Input, Checkbox} from 'antd';
import {Link} from 'react-router-dom'

const FormItem = Form.Item;

class LoginForm extends PureComponent {
  loginHandler = () => {
    const {
      form: {
        getFieldsValue
      },
      onLoginHandler
    } = this.props;
    console.log(getFieldsValue())
    onLoginHandler(getFieldsValue());
  };

  render() {
    const {
      form: {
        getFieldDecorator
      }
    } = this.props;

    return (
      <Form className="login-form">
        <FormItem>
          {getFieldDecorator('user', {
            rules: [{required: true, message: '请输入账户'}]
          })(
            <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名/邮箱/手机号"/>
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{required: true, message: '请输入密码'}]
          })(
            <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码"/>
          )}
        </FormItem>
        <Link to="/user/forgot">忘记密码</Link>
        <FormItem style={{marginTop: '20px'}}>
          <Button style={{width: '100%'}} type="primary" htmlType="submit" className="login-form-button"
                  onClick={this.loginHandler}>
            登录
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
