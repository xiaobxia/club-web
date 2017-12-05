/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Carousel, Alert, Icon} from 'antd';

class AppAnnouncement extends PureComponent {
  render() {
    return (
      <div className="announcement-wrap">
        <Alert
          message={
            <div>
              <Icon type="sound"/>
              <Carousel autoplaySpeed={5000} dots={false} vertical autoplay={true} style={{marginLeft: '20px'}}>
                <div>公告1</div>
                <div>公告2</div>
                <div>公告3</div>
              </Carousel>
            </div>
          }
          type="success"/>
      </div>
    );
  }
}

export default AppAnnouncement;
