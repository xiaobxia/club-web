/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Row, Col, Tabs} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import qs from 'qs';
import AppAnnouncement from './announcement';
import ListWrap from './listWrap';
import Advertising from 'localComponent/Advertising';
import './home.scss'
import Http from 'localUtil/httpUtil';

const TabPane = Tabs.TabPane;

//PureComponent浅比较
class AppHome extends PureComponent {
  state = {
    articleList: [],
    page: {}
  };

  tabChangeHandler = (key) => {
    console.log(key);
    this.props.history.push('/?type=' + key);
  };

  componentWillMount() {
    Http.get('articles').then((data) => {
      this.setState({
        articleList: data.list,
        page: data.page
      });
      console.log(data)
    });
  }

  renderTabs = () => {
    const tabList = [
      {type: 'recommend', name: '推荐'},
      {type: 'hot', name: '热门'},
      {type: 'new', name: '最新'}
    ];
    const query = qs.parse(this.props.location.search.slice(1));
    return (
      <Tabs defaultActiveKey={query.type || 'recommend'} onChange={this.tabChangeHandler}>
        {tabList.map((item) => {
          return (<TabPane tab={item.name} key={item.type}/>);
        })}
      </Tabs>
    );
  };


  render() {
    console.log(this.props.location.search)
    return (
      <div className="home-wrap">
        <Row>
          <Col span="16">
            <div className="main-content-wrap">
              <AppAnnouncement/>
              {this.renderTabs()}
              <ListWrap
                dataSource={this.state.articleList}
                page={this.state.page}
              />
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

export default withRouter(AppHome);
