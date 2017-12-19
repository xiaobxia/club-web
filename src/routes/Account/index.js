/**
 * Created by xiaobxia on 2017/12/11.
 */
import React, {PureComponent} from 'react'
import {Avatar, Row, Col, Card, Icon, Input, Button} from 'antd'
import {withRouter} from 'react-router-dom'
import Http from 'localUtil/httpUtil';
import './account.scss'

class Account extends PureComponent {

  state = {
    userBaseInfo: {},
    ifEdit: false
  };

  componentWillMount() {
    Http.get('userBaseInfo?userName=' + this.props.match.params.name).then((data) => {
      this.setState({
        userBaseInfo: data.data
      });
      console.log(data)
    });
  }

  updateIntroduce = () => {

  };

  showIntroduceEdit = () => {
    this.setState({
      ifEdit: true
    });
  };

  hideIntroduceEdit = () => {
    this.setState({
      ifEdit: false
    });
  };

  renderCard = () => {
    const ifEdit = this.state.ifEdit;
    const editForm = (
      <div>sadasf</div>
    );
    return (
      <div>
        {ifEdit ? editForm : <p>jijasnd</p>}
      </div>
    );
  };

  render() {
    const userBaseInfo = this.state.userBaseInfo;
    const ifEdit = this.state.ifEdit;
    return (
      <div className="account-wrap">
        <div className="base-info-wrap">
          <Row className="content-view">
            <Col span="4">
              {userBaseInfo.avatar ? <Avatar shape="circle" src={userBaseInfo.avatar}/>
                : <Avatar shape="circle" src='/user.png'/>}
            </Col>
            <Col span="12">
              <h3>{userBaseInfo.userName}</h3>
            </Col>
            <Col span="8">
              <Card
                title="个人简介"
                bordered={false}
                extra={
                  !ifEdit ? <span className="edit-btn" onClick={this.showIntroduceEdit}><Icon type="edit"
                                                                                              style={{marginRight: 10}}/>编辑</span> : null
                }
                className="introduce-card"
              >
                {this.renderCard()}
              </Card>
            </Col>
          </Row>
        </div>
        account
        {this.props.match.params.name}
        {this.props.match.params.type}
      </div>
    );
  }
}

export default withRouter(Account);
