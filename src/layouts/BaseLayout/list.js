/**
 * Created by xiaobxia on 2017/12/11.
 */
import React from 'react';
import {Avatar, List} from 'antd';

export default function NoticeList(props) {
  const {
    data = [], onClick, onClear, title, locale, emptyText, emptyImage
  } = props;
  if (data.length === 0) {
    return (
      <div>
        {emptyImage ? (
          <img src={emptyImage} alt="not found"/>
        ) : null}
        <div>{emptyText || locale.emptyText}</div>
      </div>
    );
  }
  return (
    <div>
      <List>
        {data.map((item, i) => {
          return (
            <List.Item key={item.key || i} onClick={() => onClick(item)}>
              <List.Item.Meta
                avatar={item.avatar ? <Avatar src={item.avatar}/> : null}
                title={
                  <div>
                    {item.title}
                    <div>{item.extra}</div>
                  </div>
                }
                description={
                  <div>
                    <div title={item.description}>
                      {item.description}
                    </div>
                    <div>{item.datetime}</div>
                  </div>
                }
              />
            </List.Item>
          );
        })}
      </List>
      <div onClick={onClear}>
        {locale.clear}{title}
      </div>
    </div>
  );
}
