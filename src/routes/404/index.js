/**
 * Created by xiaobxia on 2017/11/16.
 */
import React, {PureComponent} from 'react'
import {withRouter} from 'react-router-dom'
import Exception404 from 'localComponent/404'

class Route404 extends PureComponent {
  render() {
    return (
      <div>
        <Exception404/>
      </div>
    );
  }
}

export default withRouter(Route404);
