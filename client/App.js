// @flow

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';

import PageNotFound from 'components/PageNotFound';
import RootTheme from 'components/RootTheme';

class App extends Component {
  render() {
    return (
      <RootTheme>
        <BrowserRouter>
          <Switch>
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </RootTheme>
    );
  }
}

export default App;
