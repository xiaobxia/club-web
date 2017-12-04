/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Carousel} from 'antd';

class AppAnnouncement extends PureComponent {
  render() {
    return (
      <div className="announcement-wrap">
        <Carousel effect="fade">
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </div>
    );
  }
}

export default AppAnnouncement;
