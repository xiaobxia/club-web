import React, {PureComponent} from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import 'antd/dist/antd.css';
import './scss/index.scss';
import routes from './router'

console.log('app.js init');

//无状态组件
class App extends PureComponent {
  render() {
    console.log('App render');
    return (
      <Router>
        <Switch>
          {routes.map((item) => {
            return (<Route exact key={item.path} path={item.path} component={item.component}/>);
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;

