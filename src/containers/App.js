import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Registration from './Registration';
import Alert from './Alert';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <Switch>
            <Route exact path="/" component={Registration} />
          </Switch>
        </div>
        <Alert />
      </div>
    );
  }
}

export default App;
