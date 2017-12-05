/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Row, Col, Tabs, List, Avatar, Icon} from 'antd';
import {Link} from 'react-router-dom';
import AppAnnouncement from './announcement';

const TabPane = Tabs.TabPane;

//PureComponent浅比较
class AppHome extends PureComponent {
  render() {
    const listData = [];
    for (let i = 0; i < 5; i++) {
      listData.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
      });
    }

    const pagination = {
      pageSize: 10,
      current: 1,
      total: listData.length,
      onChange: () => {
      }
    };

    const IconText = ({type, text}) => (
      <span>
    <Icon type={type} style={{marginRight: 8}}/>
        {text}
  </span>
    );
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
              <List
                itemLayout="vertical"
                size="large"
                pagination={pagination}
                dataSource={listData}
                renderItem={item => (
                  <List.Item
                    key={item.title}
                    actions={[<IconText type="star-o" text="156"/>, <IconText type="like-o" text="156"/>,
                      <IconText type="message" text="2"/>]}
                    extra={<img width={272} alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={item.avatar}/>}
                      title={<a href={item.href}>{item.title}</a>}
                      description={item.description}
                    />
                    {item.content}
                  </List.Item>
                )}
              />
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
