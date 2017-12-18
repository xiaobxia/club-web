/**
 * Created by xiaobxia on 2017/12/5.
 */
import React, {PureComponent} from 'react'
import {List, Avatar, Icon} from 'antd';

//PureComponent浅比较
class ListWrap extends PureComponent {
  render() {
    const IconText = ({type, text}) => {
      return (<span><Icon type={type} style={{marginRight: 8}}/>{text}</span>);
    };
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={this.props.page}
        dataSource={this.props.dataSource}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText type="star-o" text="156"/>,
              <IconText type="like-o" text="156"/>,
              <IconText type="message" text="2"/>
            ]}
            extra={
              <img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"/>
            }
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
    );
  }
}

export default ListWrap;
