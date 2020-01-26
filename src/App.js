import React, { Component } from 'react';

import Tasks from './containers/Tasks/Tasks';
import ToolBar from './components/ToolBar/ToolBar';
import Auth from './containers/Auth/Auth';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auxiliary from './hoc/Auxiliary/Auxiliary';

class App extends Component {
  
  render() {
    let routes = (<Switch>
      <Route path="/auth" exact component={Auth} />
      <Route path="/" exact component={Tasks} />
      <Redirect to='/' />
    </Switch>);

    return (
      <div className="App">
        <ToolBar />
        <h1>Please fill all fields to create a task!</h1>
        <Auxiliary>
          {routes}
        </Auxiliary>
      </div>
    );
  }
}

export default withRouter(App);
