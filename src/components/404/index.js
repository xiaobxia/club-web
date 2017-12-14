/**
 * Created by xiaobxia on 2017/11/16.
 */
import React, {PureComponent} from 'react'
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import './404.scss'

class Exception404 extends PureComponent {
  render() {
    return (
      <div className="not-found-wrap">
        <img src="/bg_404.png" alt="404"/>
        <Button type="primary"><Link to="/">回到首页</Link></Button>
      </div>
    );
  }
}

export default Exception404;
