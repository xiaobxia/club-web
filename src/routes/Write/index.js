/**
 * Created by xiaobxia on 2017/12/15.
 */
import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'
import {Button, Icon, Input, Form, Select} from 'antd'
import {connect} from 'react-redux';
import AppEditor from 'localComponent/Editor'
import './write.scss'
import Exception404 from 'localComponent/404'
import Http from 'localUtil/httpUtil';

const FormItem = Form.Item;
const Option = Select.Option;

class Write extends PureComponent {
  getEditorValue = () => {
    return this.editor.getValue();
  };

  saveArticle = () => {
    const {
      form: {
        getFieldsValue
      }
    } = this.props;
    let data = getFieldsValue();
    data.content = this.getEditorValue();
    data.userToken = this.props.app.loginUser.token;
    Http.post('articles/add', data).then((res) => {
      if (res.success) {
        //TODO 去发布成功页面
        this.props.history.push('/');
      } else {
        console.log('发布失败')
      }
    });
    console.log(data)
  };

  render() {
    const {
      form: {
        getFieldDecorator
      }
    } = this.props;
    const isLogin = this.props.app.loginUser.isLogin;
    if (!isLogin) {
      return (
        <Exception404/>
      );
    }
    return (
      <div className="content-view">
        <Form>
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{required: true, message: '请输入标题'}]
            })(
              <Input placeholder="输入标题"/>
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('articleType', {
              rules: [{required: true, message: '请选择板块'}]
            })(
              <Select placeholder="请选择板块" style={{width: 200}}>
                <Option value="question">问答</Option>
                <Option value="activity">活动</Option>
                <Option value="friend">交友</Option>
                <Option value="game">游戏</Option>
                <Option value="partTime">兼职</Option>
              </Select>
            )}
          </FormItem>
        </Form>
        <AppEditor ref={(div) => {
          this.editor = div;
        }}/>
        <div className="bottom-bar-wrap">
          <div className="send-bar">
            <Button type="primary" onClick={this.saveArticle}><Icon type="upload"/>发送</Button>
          </div>
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

export default withRouter(connect(mapStateToProps)(Form.create()(Write)));
