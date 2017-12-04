/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Carousel, Alert} from 'antd';

class AppAnnouncement extends PureComponent {
  render() {
    return (
      <div className="announcement-wrap">
        <Alert
          message={
            <Carousel dots={false} vertical>
              <div>公告1</div>
              <div>公告2</div>
              <div>公告3</div>
            </Carousel>
          }
          type="success"/>
      </div>
    );
  }
}

export default AppAnnouncement;
