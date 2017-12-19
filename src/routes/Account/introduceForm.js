/**
 * Created by xiaobxia on 2017/12/19.
 */
import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom';
import {Button, Input, Form} from 'antd';
import Http from 'localUtil/httpUtil';

class IntroduceForm extends PureComponent {
  render() {
    console.log('AppAnnouncement');
    return (
      <div>
        <Input size="large"/>
        <div className="btn-wrap">
          <Button style={{marginRight: 10}} onClick={this.hideIntroduceEdit}>取消</Button>
          <Button type="primary">保存</Button>
        </div>
      </div>
    );
  }
}

export default Form.create()(IntroduceForm);
