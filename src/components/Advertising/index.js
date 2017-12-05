/**
 * Created by xiaobxia on 2017/12/5.
 */
import React, {PureComponent} from 'react'
import {Card} from 'antd';
//PureComponent浅比较
class Advertising extends PureComponent {
  render() {
    return (
      <Card>
        <p>Advertising</p>
      </Card>
    );
  }
}

export default Advertising;
