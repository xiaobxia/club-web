/**
 * Created by xiaobxia on 2017/12/15.
 */
import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'
import {Button, Icon} from 'antd'
import AppEditor from 'localComponent/Editor'
import './write.scss'

class Write extends PureComponent {
  render() {
    return (
      <div>
        <AppEditor ref={(div) => {
          this.editor = div;
        }}/>
        <div className="bottom-bar-wrap">
          <div className="send-bar">
            <Button type="primary"><Icon type="upload" />发送</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Write);
