/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Carousel} from 'antd';
import bgPlant from '../../assets/bg_plant.svg'

class AppAnnouncement extends PureComponent {
  render() {
    return (
      <div className="announcement-wrap">
        <Carousel effect="fade">
          <div><img src={bgPlant} alt=""/></div>
          <div><img src={bgPlant} alt=""/></div>
          <div><img src={bgPlant} alt=""/></div>
          <div><img src={bgPlant} alt=""/></div>
        </Carousel>
      </div>
    );
  }
}

export default AppAnnouncement;
