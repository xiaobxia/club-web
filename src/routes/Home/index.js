/**
 * Created by xiaobxia on 2017/12/4.
 */
import React, {PureComponent} from 'react'
import {Menu, Icon, Dropdown, Avatar, Input} from 'antd';
import AppAnnouncement from './announcement';
const Search = Input.Search;

//PureComponent浅比较
class AppHome extends PureComponent {
  render() {
    return (
      <div className="home-wrap">
        <AppAnnouncement/>
      </div>
    );
  }
}

export default AppHome;
