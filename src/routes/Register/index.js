/**
 * Created by xiaobxia on 2017/11/14.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form, Input, Button, Row, Col, Icon, Checkbox} from 'antd';
import md5 from 'md5';
import http from 'localUtil/httpUtil';

const FormItem = Form.Item;

// 不在全局注册东西
class Register extends Component {
  state = {
    confirmDirty: false,
    visible: false,
    help: '',
    agreeCheck: false
  };

  agreeCheckChange = (e) => {
    this.setState({
      agreeCheck: e.target.checked
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields({force: true},
      (err, values) => {
        if (!err) {
          delete values.confirm;
          values.password = md5(values.password);
          http.post('sys/user/register', values).then((data) => {
            if (data.success) {
              this.props.history.push('/user/registerResult?code=' + data.code);
            }
          });
        }
      }
    );
  };

  checkConfirm = (rule, value, callback) => {
    const {form} = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不匹配!');
    } else {
      callback();
    }
  };

  checkPassword = (rule, value, callback) => {
    if (!value) {
      this.setState({
        help: '请输入密码！',
        visible: !!value
      });
      callback('error');
    } else {
      this.setState({
        help: ''
      });
      if (!this.state.visible) {
        this.setState({
          visible: !!value
        });
      }
      if (value.length < 6) {
        callback('error');
      } else {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
          form.validateFields(['confirm'], {force: true});
        }
        callback();
      }
    }
  };

  render() {
    const {form} = this.props;
    const {getFieldDecorator} = form;
    return (
      <div className="register-wrap">
        <h3 className="register-title">欢迎加入</h3>
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{
                required: true, message: '请输入用户名！'
              }]
            })(
              <Input prefix={<Icon type="user"/>} size="large" placeholder="用户名"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('email', {
              rules: [{
                required: true, message: '请输入邮箱地址！'
              }, {
                type: 'email', message: '邮箱地址格式错误！'
              }]
            })(
              <Input prefix={<Icon type="mail"/>} size="large" placeholder="邮箱"/>
            )}
          </FormItem>
          <FormItem help={this.state.help}>
            {getFieldDecorator('password', {
              rules: [{
                validator: this.checkPassword
              }]
            })(
              <Input
                prefix={<Icon type="lock"/>}
                size="large"
                type="password"
                placeholder="至少6位密码，区分大小写"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('confirm', {
              rules: [{
                required: true, message: '请确认密码！'
              }, {
                validator: this.checkConfirm
              }]
            })(
              <Input
                prefix={<Icon type="lock"/>}
                size="large"
                type="password"
                placeholder="确认密码"
              />
            )}
          </FormItem>
          <FormItem>
            <Checkbox onChange={this.agreeCheckChange}>同意并接受<Link to="/about/serve">《服务条款》</Link></Checkbox>
          </FormItem>
          <Row>
            <Col span="12">
              <Button
                disabled={!this.state.agreeCheck}
                className="block-btn"
                size="large"
                type="primary"
                htmlType="submit">
                注册
              </Button>
            </Col>
            <Col span="12" style={{textAlign: 'center', lineHeight: '32px'}}>
              <Link to="/user/login">使用已有账户登录</Link>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default Form.create()(Register);
