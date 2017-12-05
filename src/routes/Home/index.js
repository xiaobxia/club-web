/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Row, Col, Tabs} from 'antd';
import {Link} from 'react-router-dom';
import AppAnnouncement from './announcement';

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
                <TabPane tab={<Link to="/">推荐</Link>} key="1"/>
                <TabPane tab={<Link to="/welcome/hot">热门</Link>} key="2"/>
                <TabPane tab={<Link to="/welcome/new">最新</Link>} key="3"/>
              </Tabs>
            </div>
          </Col>
          <Col span="8">
            <div className="main-side-wrap"></div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AppHome;
