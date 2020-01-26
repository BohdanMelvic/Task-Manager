import React, { Component } from 'react';

import Tasks from './containers/Tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Please fill all fields to create a task!</h1>
        <Tasks />
      </div>
    );
  }
}

export default App;
