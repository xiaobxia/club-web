/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Row, Col, Tabs} from 'antd';
import {Link} from 'react-router-dom';
import AppAnnouncement from './announcement';
import ListWrap from './listWrap';
import Advertising from 'localComponent/Advertising';

const TabPane = Tabs.TabPane;

//PureComponent浅比较
class AppHome extends PureComponent {
  render() {
    return (
      <div className="home-wrap">
        <Row>
          <Col span="16">
            <div className="main-content-wrap">
              <AppAnnouncement/>
              <Tabs>
                <TabPane tab="推荐" key="1"/>
                <TabPane tab="热门" key="2"/>
                <TabPane tab="最新" key="3"/>
              </Tabs>
              <ListWrap/>
            </div>
          </Col>
          <Col span="8">
            <div className="main-side-wrap">
              <Advertising/>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppHome;
