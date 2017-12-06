/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Link} from 'react-router-dom';
import {Carousel, Alert, Icon} from 'antd';
import Http from 'localUtil/httpUtil';

class AppAnnouncement extends PureComponent {
  state = {
    broadcastList: []
  };

  componentWillMount() {
    Http.get('broadcasts').then((data) => {
      this.setState({
        broadcastList: data.list
      });
      console.log(data)
    });
  }

  renderBroadcastList = () => {
    if (this.state.broadcastList.length === 0) {
      return (<div>暂无公告</div>);
    }
    return this.state.broadcastList.map((item, index) => {
      return (<div key={index}>{item.url ? <Link to={item.url}>{item.title}</Link> : item.title}</div>);
    })
  };

  render() {
    console.log('AppAnnouncement');
    return (
      <div className="announcement-wrap">
        <Alert
          message={
            <div>
              <Icon type="sound"/>
              <Carousel autoplaySpeed={5000} dots={false} vertical autoplay={true} style={{marginLeft: '20px'}}>
                {this.renderBroadcastList()}
              </Carousel>
            </div>
          }
          type="success"/>
      </div>
    );
  }
}

export default AppAnnouncement;
