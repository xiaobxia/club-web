/**
 * Created by xiaobxia on 2017/12/11.
 */
import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'

class Account extends PureComponent {
  render() {
    return (
      <div>
        account
        {this.props.match.params.name}
        {this.props.match.params.type}
      </div>
    );
  }
}

export default withRouter(Account);
