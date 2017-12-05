import React, {PureComponent} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import 'antd/dist/antd.css';
import './scss/index.scss';
import {otherRoutes, notMatch} from './router';
import BaseLayout from './layouts/BaseLayout';


console.log('app.js init');

//无状态组件
class App extends PureComponent {
  render() {
    console.log('App render');
    return (
      <Router>
        <Switch>
          {otherRoutes.map((item) => {
            return (<Route exact key={item.path} path={item.path} component={item.component}/>);
          })}
          <Route path='/' component={BaseLayout}/>
          <Route path={notMatch.path} component={notMatch.component}/>
        </Switch>
      </Router>
    );
  }
}

export default App;

