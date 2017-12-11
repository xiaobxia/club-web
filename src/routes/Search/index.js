/**
 * Created by xiaobxia on 2017/12/11.
 */
import React, {PureComponent} from 'react'
import {Row, Col, Tabs} from 'antd';
import {Link, withRouter} from 'react-router-dom';
import qs from 'qs';
import Advertising from 'localComponent/Advertising';

const TabPane = Tabs.TabPane;

//PureComponent浅比较
class AppHome extends PureComponent {

  componentWillMount() {
    this.initPage();
  }

  initPage = () => {
    const query = this.getSearch();
    //初始化页面
    query.current = query.current || 1;
    query.pageSize = query.pageSize || 10;
    this.querySearch(qs.stringify(query));
    console.log(query)
  };

  getSearch = () => {
    const search = this.props.location.search;
    let query = {};
    if (search) {
      query = qs.parse(search.slice(1));
    }
    return query;
  };

  querySearchWithUpdateQuery = (queryString) => {
    this.props.history.push('/search?' + queryString);
    this.querySearch(queryString);
  };

  querySearch = (queryString) => {
    const {systemMessageActions} = this.props;
    systemMessageActions.querySystemMessages(queryString).then((data) => {
      //无数据
      if (data.list.length === 0) {
        const query = this.getSearch();
        const current = parseInt(query.current, 10);
        if (current && current > 1) {
          if (this.state.redirectCount > 1) {
            this.props.history.push('/404');
          }
          this.setState((pre) => {
            return {
              redirectCount: pre.redirectCount + 1
            }
          });
          query.current = current - 1;
          this.querySearchWithUpdateQuery(qs.stringify(query));
        }
      } else {
        this.setState((pre) => {
          return {
            redirectCount: 0
          }
        });
      }
    });
  };

  render() {
    console.log(this.props.location.search)
    return (
      <div className="home-wrap">
        <Row>
          <Col span="16">
            <div className="main-content-wrap">
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
