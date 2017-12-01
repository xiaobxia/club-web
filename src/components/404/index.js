/**
 * Created by xiaobxia on 2017/11/16.
 */
import React, {PureComponent} from 'react'
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import {consoleRender} from 'localUtil/consoleLog'
import img404 from '../../assets/404.png'

class Exception404 extends PureComponent {
  render() {
    return (
      <div className="not-found-wrap">
        <img src={img404} alt=""/>
        <Button type="primary"><Link to="/">回到首页</Link></Button>
      </div>
    );
  }
}

export default Exception404;
