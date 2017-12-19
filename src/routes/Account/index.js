/**
 * Created by xiaobxia on 2017/12/11.
 */
import React, {PureComponent} from 'react'
import {Avatar} from 'antd'
import {withRouter} from 'react-router-dom'
import Http from 'localUtil/httpUtil';
import './account.scss'

class Account extends PureComponent {

  state = {
    userBaseInfo: {}
  };

  componentWillMount() {
    Http.get('userBaseInfo?userName=' + this.props.match.params.name).then((data) => {
      this.setState({
        userBaseInfo: data.data
      });
      console.log(data)
    });
  }

  render() {
    const userBaseInfo = this.state.userBaseInfo;
    return (
      <div className="account-wrap">
        <div className="base-info-wrap">
          {userBaseInfo.avatar ? <Avatar src={userBaseInfo.avatar}/> : <Avatar shape="circle" icon="user"/>}
        </div>
        account
        {this.props.match.params.name}
        {this.props.match.params.type}
      </div>
    );
  }
}

export default withRouter(Account);
